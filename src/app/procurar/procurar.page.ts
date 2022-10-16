import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-procurar',
  templateUrl: './procurar.page.html',
  styleUrls: ['./procurar.page.scss'],
})
export class ProcurarPage implements OnInit {

  constructor(public toastController: ToastController, private route: Router) { }

  ngOnInit() {
  }
  voltar(){
    this.route.navigateByUrl('tabs/tab1');
  }
  editar(){
    this.route.navigateByUrl('adicionar/adicionar');
  }
}
