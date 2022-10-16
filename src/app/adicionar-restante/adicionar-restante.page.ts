import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-adicionar-restante',
  templateUrl: './adicionar-restante.page.html',
  styleUrls: ['./adicionar-restante.page.scss'],
})
export class AdicionarRestantePage implements OnInit {

  constructor(public toastController: ToastController, private route: Router) { }

  ngOnInit() {
  }
  voltar(){
    this.route.navigateByUrl('tabs/tab1');
  }
  avancar(){
    this.route.navigateByUrl('editar-procurar/editarProcurar');
  }

}
