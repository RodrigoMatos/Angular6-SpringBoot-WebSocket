package src.entity;

import java.io.Serializable;

public class PlayerEntity implements Serializable {

	private static final long serialVersionUID = -3510962379002913544L;

	private Integer posicaoX;

	private Integer posicaoY;

	private Integer pontos;

	private String nome;

	private Integer velocidade;

	public Integer getPosicaoX() {
		return posicaoX;
	}

	public void setPosicaoX(Integer posicaoX) {
		this.posicaoX = posicaoX;
	}

	public Integer getPosicaoY() {
		return posicaoY;
	}

	public void setPosicaoY(Integer posicaoY) {
		this.posicaoY = posicaoY;
	}

	public Integer getPontos() {
		return pontos;
	}

	public void setPontos(Integer pontos) {
		this.pontos = pontos;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public Integer getVelocidade() {
		return velocidade;
	}

	public void setVelocidade(Integer velocidade) {
		this.velocidade = velocidade;
	}

}
