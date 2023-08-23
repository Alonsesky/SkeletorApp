import { Component, ElementRef, OnInit, ViewChild, QueryList, ViewChildren} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Animation, AnimationController, IonCard, IonCardTitle, IonTitle } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild(IonCardTitle, {read: ElementRef}) 
  title!: ElementRef<HTMLIonCardElement>;
  animation!: Animation;
  formLogin: FormGroup;
  

  constructor(private animationCtrl: AnimationController, public fb: FormBuilder) {
    this.formLogin = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required)
    });
  }


  ngOnInit() {
  }

  //Verificar datos de login
  verificarLogin(){}

  ngAfterViewInit() {
    this.animation = this.animationCtrl
      .create()
      .addElement(this.title.nativeElement)
      .duration(1500)
      .iterations(Infinity)
      .fromTo('transform', 'translateX(-100px)', 'translateX(100px)')
      .fromTo('opacity', '10', '0.5');  
    this.animation.play();
  }

}