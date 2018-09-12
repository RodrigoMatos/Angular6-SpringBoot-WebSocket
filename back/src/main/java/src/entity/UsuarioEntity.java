package src.entity;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UsuarioEntity implements Serializable {

	private static final long serialVersionUID = 4739348179581997314L;

	@JsonProperty
	private String nome;

	public UsuarioEntity() {
		super();
	}

	public UsuarioEntity(String nome) {
		super();
		this.nome = nome;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

}
