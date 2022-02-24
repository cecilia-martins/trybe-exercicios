import React from "react";
import './Form.css';

class Form extends React.Component{
  constructor() {
    super()
    
    this.handleTextAreaChange = this.handleTextAreaChange.bind(this)

    this.state = {
      estadoFavorito: '',
      nome: '',
      email: '',
      idade: 0,
      vaiComparecer: false,
      palavraChaveFavorita: ''
    }
  }
 
  handleTextAreaChange(event) {
    this.setState({estadoFavorito: event.target.value})
  }
  
  render() {
    return (
      // <span>Meu Formulário</span>
      <div>
        <h1>Estados e React: ferramenta incrivel ou reagindo a regionalismo</h1>
        <form className="form">
          <label>
            Diga qual é seu Estado favorito! Do Brasil ou do React, você quem sabe!
            <textarea name="estadoFavorito" onChange={this.handleTextAreaChange}/>
          </label>
          <label>
            Email
            <input name="email" type="email"/>
          </label>
          <label>
            Nome
            <input name="nome" type="text"/>
          </label>
          <label>
            Idade
            <textarea name="idade" type="number"/>
          </label>
          <label>
            Vai comparecer a comferencia?
            <input name="vaiComparecer" type="checkbox"/>
          </label>
          <label>
            Escolha sua palavra chave favorita:
            <select name="palavraChaveFavorita">
            <option value="estado">Estado</option>
            <option value="eventos">Evento</option>
            <option value="props">Props</option>
            <option value="hooks">Hooks</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}
export default Form;
