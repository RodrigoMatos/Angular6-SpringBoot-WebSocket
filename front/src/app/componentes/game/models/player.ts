export class Player {

    posicaoX: number;
    posicaoY: number;
    pontos: number;
    nome: string;
    velocidade: number;
    largura: number;
    altura: number;

    constructor() {
        this.pontos = 0;
        this.posicaoX = 0;
        this.posicaoY = 0;
        this.velocidade = 5;
        this.largura = 15;
        this.altura = 100;
    }

    public moveUp() {
        this.posicaoY -= this.velocidade;
    }

    public moveDown() {
        this.posicaoY += this.velocidade;
    }

    public moveLeft() {
        this.posicaoX -= this.velocidade;
    }

    public moveRight() {
        this.posicaoX += this.velocidade;
    }

}
