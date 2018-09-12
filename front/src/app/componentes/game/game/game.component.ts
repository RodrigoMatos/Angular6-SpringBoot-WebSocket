import { isNullOrUndefined } from 'util';
import { environment } from './../../../../environments/environment';
import { Component, HostListener, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Player } from './../models/player';
import * as SockJS from 'sockjs-client';
import * as Stomp from 'stompjs';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  iniciou: boolean;
  player1: Player;
  player2: Player;
  sala: number;

  limitX: number;
  limitY: number;

  @ViewChild('cenario') cenario: ElementRef;

  private stompClient;

  constructor() {
    this.sala = 2;
    this.initializeWebSocketConnection();
  }

  ngOnInit() {
    this.iniciou = true;
    this.player1 = new Player();
    this.player1.nome = this.gerarIdUser();
    this.player2 = new Player();
    this.limitX = this.cenario.nativeElement.offsetWidth;
    this.limitY = this.cenario.nativeElement.offsetHeight;
    this.player2.posicaoX = this.limitX - this.player2.largura;
  }

  private gerarIdUser(): string {
    return (Math.floor(Math.random() * (9999999999 - 0 + 1)) + 0).toString();
  }

  private initializeWebSocketConnection() {
    const ws = new SockJS(environment.url_socket);
    this.stompClient = Stomp.over(ws);
    const that = this;
    this.stompClient.connect({}, function (frame) {
      that.stompClient.subscribe('/endpoint/game/' + that.sala, (data) => {
        if (data.body) {
          const retorno = JSON.parse(data.body);
          if (retorno.nome !== that.player1.nome) {
            that.player2.nome = retorno.nome;
            that.player2.posicaoY = retorno.posicaoY;
            that.player2.pontos = retorno.pontos;
          }
        }
      });
    });
  }

  public sendMessage() {
    this.stompClient.send('/app/send/player/' + this.sala, {}, JSON.stringify(this.player1));
  }

  @HostListener('window:keydown', ['$event'])
  keyUpEvent(event: KeyboardEvent) {
    this.movePlayer(event);
  }

  private movePlayer(event: KeyboardEvent) {
    if (this.iniciou) {
      if (event.key === 'ArrowUp' && this.validUser()) {
        if (this.player1.posicaoY - this.player1.velocidade >= 0) {
          this.player1.moveUp();
          this.sendMessage();
        }
      } else if (event.key === 'ArrowDown' && this.validUser()) {
        if (this.player1.posicaoY + this.player1.velocidade + this.player1.altura <= this.limitY) {
          this.player1.moveDown();
          this.sendMessage();
        }
      }
    }
  }

  private validUser(): boolean {
    if (isNullOrUndefined(this.player1.nome) || '' === this.player1.nome) {
      alert('Informa seu nome');
      return false;
    }
    return true;
  }

}
