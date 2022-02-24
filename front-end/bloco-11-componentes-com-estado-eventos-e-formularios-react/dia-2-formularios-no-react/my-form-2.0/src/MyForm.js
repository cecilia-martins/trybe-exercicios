import React from 'react';
import './MyForm.css';

class MyForm extends React.Component{
  render() {
    return(
      <fieldset>
        <label>
          Nome:
          <input type="text" placeholder="Digite seu nome" required/>
        </label>
        <label>
          Email:
          <input type="email" placeholder="Digite um email valido" required/>
        </label>
        <label>
          CPF:
          <input type="text" placeholder="Digite seu CPF" required/>
        </label>
        <div>
          <label>
            Endereço:
            <input type="text" placeholder="Digite seu endereço" required/>
          </label>
          <label>
            Cidade:
            <input type="text" placeholder="Cidade" required/>
          </label>
          <label>
            Estado:
            <input list="datalistInput" type="text" placeholder="Escolha um estado" required/>
            <datalist id="datalistInput">
              <option value="Goias"/>
              <option value="Distrito Federal"/>
              <option value="Mais um estado"/>
              <option value="E mais outro estado :)"/>
            </datalist>
          </label>
          <label> Apto
          <input type="radio"/>
          Casa
          <input type="radio"/>
          </label>
        </div>
      </fieldset>
      
    )
  }
}
export default MyForm;
