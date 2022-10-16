import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor(public toastController: ToastController, private route: Router ) {}

  ngOnInit() {
  }
  configuracoes(){
    this.route.navigateByUrl('/configuracoes/configuracoes');
  }
  adicionar(){
    this.route.navigateByUrl('/adicionar/adicionar');
  }
  procurar(){
    this.route.navigateByUrl('/procurar/procurar');
  }

}
