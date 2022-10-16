import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-editar-procurar',
  templateUrl: './editar-procurar.page.html',
  styleUrls: ['./editar-procurar.page.scss'],
})
export class EditarProcurarPage implements OnInit {

  constructor(public toastController: ToastController, private route: Router) { }

  ngOnInit() {
  }
  voltar(){
    this.route.navigateByUrl('tabs/tab1');
  }
  imprimir(){

  }
  editar(){

  }
  deletar(){

  }
}
