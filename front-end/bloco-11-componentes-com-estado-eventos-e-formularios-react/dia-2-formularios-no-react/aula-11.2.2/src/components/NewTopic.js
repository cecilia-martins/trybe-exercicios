import React, { Component } from "react";

import "../css/NewTopic.css";

export default class NewTopic extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      level: 1,
      thumbnail: '',
      projectFinished: false,
    }

    this.handleChange = this.handleChange.bind(this)

  }

  handleChange(event){
    const { value, name } = event.target;
    this.setState({[name]: value})
  }

  render() {
    return (
      <form className="new-topic-form">
        <label htmlFor="title">
          Title:
          <input type="text" name="title" id="title" onChange={this.handleChange}/>
        </label>
        <label htmlFor="level">
          Level:
          <input type="number" min="1" max="5" name="level" id="level" nChange={this.handleChange} />
        </label>
        <label htmlFor="thumbnail">
          Image url:
          <input type="text" name="thumbnail" id="thumbnail" nChange={this.handleChange} />
        </label>
        <label htmlFor="projectFinished">
          Projeto foi finalizado?
          <input id="projectFinished" type="checkbox" name="projectFinished" nChange={this.handleChange} />
        </label>
        <button type="submit">Adicionar tópico</button>
      </form>
    );
  }
}
