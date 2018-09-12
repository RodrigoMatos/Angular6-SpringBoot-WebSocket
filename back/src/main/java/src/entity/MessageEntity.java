package src.entity;

import java.io.Serializable;
import java.util.Date;

import com.fasterxml.jackson.annotation.JsonProperty;

public class MessageEntity implements Serializable {

	private static final long serialVersionUID = -5310155966933510909L;

	@JsonProperty
	private String texto;

	@JsonProperty
	private Date data;

	@JsonProperty
	private UsuarioEntity usuario;

	public MessageEntity() {
		super();
	}

	public MessageEntity(String texto, Date data, UsuarioEntity usuario) {
		super();
		this.texto = texto;
		this.data = data;
		this.usuario = usuario;
	}

	public String getTexto() {
		return texto;
	}

	public void setTexto(String texto) {
		this.texto = texto;
	}

	public Date getData() {
		return data;
	}

	public void setData(Date data) {
		this.data = data;
	}

	public UsuarioEntity getUsuario() {
		return usuario;
	}

	public void setUsuario(UsuarioEntity usuario) {
		this.usuario = usuario;
	}

}
