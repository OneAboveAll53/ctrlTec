import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  email: string;
  senha: string;

  constructor(public toastController: ToastController, private route: Router ) { }

  ngOnInit() {
  }
  login(){
    this.route.navigateByUrl('/login/login');
  }

  async presentToast(texto: string, cor: string){
    const toast = await this.toastController.create({
      message: texto,
      color: cor,
      duration: 2000
    });
    toast.present();
  }

}
