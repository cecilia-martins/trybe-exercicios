import React from 'react';

class Form extends React.Component {
  constructor() {
    super();
    this.state ={
      nome: '',
      email: '',
    }

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
  }
  handleNameChange(event) {
    // console.log(event);
    this.setState = ({
      name: event.target.value,
      // email: event.target.value
    });
  }

  handleEmailChange(event) {
    console.log(event)
  }

  render() {

    return(
      <main>
        <form>
        <section>
          <label>Nome
            <input 
            name="name" 
            value={this.state.name} 
            type="text" 
            placeholder="Digite seu nome"/>
          </label>
          <label>Email
            <input 
            name="email" 
            value={this.state.email} 
            onChange={this.handleEmailChange} type="email" placeholder="Digite seu email"/>
          </label>
        </section>
        </form>
      </main>
    )
  }
}
export default Form;
