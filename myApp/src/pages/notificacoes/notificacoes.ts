import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TipoNotificacao } from '../../app/app.component';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-notificacoes',
  templateUrl: 'notificacoes.html',
})
export class NotificacoesPage {
  
  private notificacao: any;
  private notificacoes = [];
  
  
  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
    this.notificacao = { tipo: TipoNotificacao.NovaAtividade, habilitado:true, imagem: "assets/imgs/img_padrao_projeto.png", mensagem: "Anderson Dalbert lhe mencionou como colaborador na atividade 'Wireframing' em 'Projeto ES'." };  
    this.notificacoes.push(this.notificacao);
    this.notificacao = { tipo: TipoNotificacao.Revisao,habilitado:true, imagem: "assets/imgs/revisao.png", mensagem: "Sua submissão da atividade 'Criar o diagrama de classes' foi marcada para revisão." };  
    this.notificacoes.push(this.notificacao);
    this.notificacao = { tipo: TipoNotificacao.Chat, habilitado:true, imagem: "assets/imgs/chat.png", mensagem: "4 mensagens não lidas em 2 chats." };
    this.notificacoes.push(this.notificacao);

  }
  showAlert(notificacao) {
    this.desabilita(notificacao);
    const alert = this.alertCtrl.create({
      
      title: notificacao.tipo,
      message: notificacao.mensagem,
      buttons: ['OK']
    });
    alert.present();
  }
  desabilita(notificacao): any {
    this.notificacoes.forEach(element => {
      if(element==notificacao){
        element.habilitado=false;
      }
    });
  }
}