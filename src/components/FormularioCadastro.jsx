import React, { Component } from "react";


class FormularioCadastro extends Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Título da nota" />
        <textarea placeholder="Escreva uma nota" />
        <button>Criar nota</button>
      </form>
    );
  }
}

export default FormularioCadastro;