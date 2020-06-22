import React, { Component } from "react";
import "./TodoApp.css";

export default class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.textBox = React.createRef();

    this.state = {
      input: "",
      items: [],
      editItemKey: -1,
    };

    this.myInput = React.createRef();
  }

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };

  editItem = (key) => {
    this.setState({
      input: this.state.items.filter((data, index) => index === key),
      editItemKey: key,
    });
  };

  storeItems = (e) => {
    e.preventDefault();
    const { input, editItemKey, items } = this.state;
    if (editItemKey >= 0) {
      const allItems = items;
      allItems[editItemKey] = input;

      this.setState({
        items: allItems,
        input: "",
        editItemKey: -1,
      });

    } else {
      this.setState({
        items: [...this.state.items, input], //advanced_concept: spread operator : will push input to items
        input: "",
      });
    }
  };

  deleteItem = (key) => {
    this.setState({
      items: this.state.items.filter((data, index) => index !== key), //advanced : filter
    });
  };

  render() {
    const { input, items } = this.state; // advanced : destructuring

    return (
      <div className="todo-container">
        <form className="input-section" onSubmit={this.storeItems}>
          <h1>todo app</h1>

          <input
            type="text"
            value={input}
            onChange={this.handleChange}
            placeholder="enter items..."
          />
        </form>

        <ul>
          {items.map((item, index) => {
            return (
              <li key={index}>
                <span>{item}</span>

                <i
                  className="fas fa-pen"
                  onClick={() => this.editItem(index)}
                ></i>

                <i
                  className="fas fa-trash-alt"
                  onClick={() => this.deleteItem(index)}
                ></i>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
