import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AlertController, AnimationController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  
  formHome: FormGroup;
  name: String = '';
  lastName:String= '';
  education: String = '';
  date!: null;

  constructor( public alertController: AlertController, private animationCtrl: AnimationController, public fb: FormBuilder, public router: Router) {
    this.formHome = this.fb.group({
      'name': new FormControl("", Validators.required),
      'lastName': new FormControl("", Validators.required),
      'education': new FormControl("", Validators.required),
      'date': new FormControl("", Validators.required)
    });
  }

  actualizarDatos(){

  }

  mostrar(){
    
  }

  async onSubmit(){
    const user = localStorage.getItem('user');
    // Obtener el usuario del almacenamiento local
    if (user!=null) {
      var form = this.formHome.value;
      const userData = JSON.parse(user);

      userData.name = form.name;
      userData.lastName = form.lastName;

      localStorage.setItem('user', JSON.stringify(userData));

      //Mostrar finalmente
      if (userData.name != '') {
        const alert = await this.alertController.create({
          header: 'Usuario',
          message: 'Su nombre es ' + userData.name +' '+ userData.lastName,
          buttons: ['Aceptar']
        });
        await alert.present();
        return;
      } else if (userData.name == ''){
        const alert = await this.alertController.create({
          header: 'Usuario',
          message: 'Debe llenar los campos, no hay registros de sus datos personales',
          buttons: ['Aceptar']
        });
        await alert.present();
        return;
      }
    }


    


    
  }

   //Limpiar inputs
  limpiar(){
    this.name = '';
    this.lastName= '';
    this.education= '';
  }


}


