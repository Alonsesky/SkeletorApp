import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validator, FormControl, Validators } from '@angular/forms';
import { Animation, AnimationController, IonCard, IonTitle } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;
  @ViewChild(IonCard,{read: ElementRef})
  card!: ElementRef<HTMLIonCardElement>;
  private animation!: Animation;

  constructor(public fb: FormBuilder, private animationCtrl: AnimationController) { 
    this.registerForm = this.fb.group({
      'name' : new FormControl('',Validators.required),
      'password': new FormControl('',Validators.required),
      'confirmPassword': new FormControl('',Validators.required)
    })
  }

  ngOnInit() {
  
  }

  play() {
    this.animation.play();
  }

  ngAfterViewInit(){
    this.animation = this.animationCtrl
      .create()
      .addElement(this.card.nativeElement)
      .duration(1500)
      .iterations(Infinity)
      .direction('alternate')
      .fromTo('background', 'blue', 'var(--background)');
  }

  guardarRegistro(){

  }

}
