import React, { Component } from "react";

import Header from "./components/Header";
import TopicCard from "./components/TopicCard";
import NewTopic from "./components/NewTopic";

import data from "./data";

import "./css/App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      topics: data
    };
  }

  addNewTopic(topic) {
    this.setState((estadoAnterior) => ({topics: [...estadoAnterior.topics, topic]}) )
  }

  render() {
    const { topics } = this.state;

    return (
      <div className="main-page">
        <Header />
        <NewTopic addNewTopic={this.addNewTopic}/>

        <div className="topic-list">
          {topics.map((topic) => (
            <div className="topic-content" key={topic.title}>
              <TopicCard topic={topic} key={topic.title} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
