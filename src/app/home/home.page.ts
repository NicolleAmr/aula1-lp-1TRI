import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  mensagem: string = ''; //estava dando erro ent comlocamos um valor vazio + = ''; +

  constructor() {}

  exibirMensagem(){ //comando pra exibir msg
    this.mensagem = 'Bem vindo ao Ionic';
  }

}
