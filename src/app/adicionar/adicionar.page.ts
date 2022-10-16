import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.page.html',
  styleUrls: ['./adicionar.page.scss'],
})
export class AdicionarPage implements OnInit {

  constructor(public toastController: ToastController, private route: Router) { }

  ngOnInit() {
  }
  voltar(){
    this.route.navigateByUrl('tabs/tab1');
  }
  avancar(){
    this.route.navigateByUrl('adicionar-restante/adicionarRestante');
  }
}
