import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-configuracoes',
  templateUrl: './configuracoes.page.html',
  styleUrls: ['./configuracoes.page.scss'],
})
export class ConfiguracoesPage implements OnInit {
  email: string;
  nome: string;

  constructor(public toastController: ToastController, private route: Router) { }

  ngOnInit() {
  }
  voltar(){
    this.route.navigateByUrl('tabs/tab1');
  }

  menssagemSalvar(){
      this.presentToast('Salvo', 'success');
  }
  async presentToast(texto: string, cor: string) {
    const toast = await this.toastController.create({
      message: texto,
      color: cor,
      duration: 1500,
    });

    await toast.present();
  }

}
