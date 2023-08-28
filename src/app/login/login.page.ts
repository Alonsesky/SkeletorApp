import { Component, ElementRef, OnInit, ViewChild, QueryList, ViewChildren} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  usuario: String = '';
  password:String='';

  constructor(private animationCtrl: AnimationController, public fb: FormBuilder, public router: Router) {
    this.formLogin = this.fb.group({
      'usuario': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required)
    });
  }


  ngOnInit() {
  }

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

  //Verificar datos de login
  verificarLogin(){
    var form = this.formLogin.value;
    var user = localStorage.getItem('user');
    
    if (user!==null) {
      var userItems = JSON.parse(user);
      if (userItems.usuario == form.usuario && userItems.password == form.password) {
        this.router.navigate(['/home']);
        
      }
    }
  }

  //Limpiar inputs
  limpiarInputs(){
    this.usuario = '';
    this.password= '';
  }
}