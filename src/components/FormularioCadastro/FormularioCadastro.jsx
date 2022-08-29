import React, { Component } from "react";
import "./estilo.css"

class FormularioCadastro extends Component {
  constructor(props) {
    super(props);
    this.titulo = "";
    this.texto = "";
  }

  _criarNota(evento) {
    evento.preventDefault();
    evento.stopPropagation();
    
    this.props.criarNota(this.titulo, this.texto);

    evento.target.querySelector('input').value = '';
    evento.target.querySelector('textarea').value = '';
    this.titulo = "";
    this.texto = ""
  }

  _handleMudancaTitulo(evento) {
    evento.stopPropagation();
    this.titulo = evento.target.value;
  }   

  _handleMudancaTexto(evento) {
    evento.stopPropagation();
    this.texto = evento.target. value;
  }

  render() {
    return (
      <form className="form-cadastro" onSubmit={this._criarNota.bind(this)}>
        <input type="text" placeholder="Título da nota" className="form-cadastro_input" onChange={this._handleMudancaTitulo.bind(this)} required/>
        <textarea placeholder="Escreva uma nota" className="form-cadastro_input" rows={15} onChange={this._handleMudancaTexto.bind(this)} required/>
        <button className="form-cadastro_input form-cadastro_submit">Criar nota</button>
      </form>
    );
  }
}

export default FormularioCadastro;