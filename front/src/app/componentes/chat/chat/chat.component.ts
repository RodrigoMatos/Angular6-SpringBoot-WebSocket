import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import * as SockJS from 'sockjs-client';
import * as Stomp from 'stompjs';
import { isNullOrUndefined } from 'util';
import { environment } from '../../../../environments/environment';
import { MessageEntity } from './../../../../entity/message-entity';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  private stompClient;
  private sala = '1';

  public listMessages: MessageEntity[] = [];

  public message = new MessageEntity();

  constructor(private datePipe: DatePipe) {
    this.initializeWebSocketConnection();
  }

  ngOnInit() {
  }

  private initializeWebSocketConnection() {
    const ws = new SockJS(environment.url_socket);
    this.stompClient = Stomp.over(ws);
    const that = this;
    this.stompClient.connect({}, function (frame) {
      that.stompClient.subscribe('/endpoint/chat/' + that.sala, (data) => {
        if (data.body) {
          const retorno = JSON.parse(data.body);
          retorno.classeCss = (retorno.usuario.nome === that.message.usuario.nome) ? 'message-right' : 'message-left';
          that.listMessages.push(retorno);
          setTimeout(() => {
            document.getElementsByClassName('chat')[0].scrollTop = document.getElementsByClassName('chat')[0].scrollHeight + 50;
          });
        }
      });
    });
  }

  public canSendMessage(): boolean {
    return (!isNullOrUndefined(this.message.texto) && '' !== this.message.texto);
  }

  public sendMessage() {
    if (isNullOrUndefined(this.message.usuario.nome)) {
      alert('Digite o seu nome.');
      return;
    }
    this.stompClient.send('/app/send/message/' + this.sala, {}, JSON.stringify(this.message));
    this.message.texto = undefined;
  }

  public onKey(event: any) {
    if (event.key === 'Enter' && this.canSendMessage()) {
      this.sendMessage();
    }
  }

}
