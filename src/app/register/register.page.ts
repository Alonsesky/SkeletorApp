import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validator, FormControl, Validators } from '@angular/forms';
import { AlertController, Animation, AnimationController, IonCard, IonTitle } from '@ionic/angular';

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

  constructor(public fb: FormBuilder, private animationCtrl: AnimationController,
    public alertController: AlertController) { 
    this.registerForm = this.fb.group({
      'usuario' : new FormControl('',Validators.required),
      'password': new FormControl('',Validators.required),
      'confirmPassword': new FormControl('',Validators.required)
    })
  }

  ngOnInit() {
  
  }

  ngAfterViewInit(){
    this.animation = this.animationCtrl
      .create()
      .addElement(this.card.nativeElement)
      .duration(1500)
      .iterations(Infinity)
      .direction('alternate')
      .fromTo('background', 'blue', 'var(--background)');
      this.animation.play();

  }

    async onSubmit(){
    //Verificar datos de login
      var form = this.registerForm.value;
      if (form.usuario.length>8 || form.usuario.length<3) {
        const alert = await this.alertController.create({
          header: 'Datos incorrectos',
          message: 'User debe ser entre 3-8 dígitos mientras que el password mínimo 3 dígitos.',
          buttons: ['Aceptar']
        });
        await alert.present();
        return;
      
      } else if(this.registerForm.invalid){
        const alert = await this.alertController.create({
          header: 'Datos incompletos',
          message: 'Debe llenar todos los datos.',
          buttons: ['Aceptar']
        });
        await alert.present();
        return;
      } 
      var user = {
        usuario: form.usuario,
        password: form.password
      }
      localStorage.setItem('user',JSON.stringify(user));
      
    
    }
}
