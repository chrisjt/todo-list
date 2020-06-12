import React from "react";
import ReactDOM from "react-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

function Form(props) {
  return (
    <form id="frmItem" onSubmit={props.onSubmit} >
      <div class="form-group">
        <label for="inputTodo">To-do item</label>
        <input type="text" class="form-control" id="inputTodo" placeholder="Enter to-do item" />
      </div>
      <button class="btn btn-primary">Add</button>
    </form>
  )
}

function List(props) {
  const listItems = props.items.map((item) =>
    <li key={item}>
      {item}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  )
}

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      items: ['Write code', 'Commit changes to .git', 'Run server']
    }
  }
  handleSubmit(event) {
    event.preventDefault();
    const inputItem = document.getElementById("frmItem");
    const arrItems = this.state.items;
    arrItems.push(inputItem.elements[0].value);
    this.setState({
      items: arrItems
    })
  }
  render() {
    return (
      <div>
        <Form
          onSubmit={(event) => this.handleSubmit(event) }
        />
        <br/>
        <List items={this.state.items}/>
      </div>
    )
  }
}

ReactDOM.render(
  <Container />,
  document.getElementById('container')
);
