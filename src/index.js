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
      <button type="button" onClick={() => props.onClick(item)} class="close" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
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
  handleRemove(item) {
    const arrItems = this.state.items;
    function getIndex(checkItem) {
      return checkItem == item;
    }
    var indexItem = arrItems.findIndex(getIndex);
    arrItems.splice(indexItem, 1);
    // update state
    this.setState({
      items: arrItems
    })

  }
  handleSubmit(event) {
    event.preventDefault();
    const inputItem = document.getElementById("inputTodo");
    const item = inputItem.value;
    inputItem.value = "";
    const arrItems = this.state.items;
    function getIndex(checkItem) {
      return checkItem == item;
    }
    var indexItem = arrItems.findIndex(getIndex);
    if(indexItem == -1) {
      arrItems.push(item);
      // update state
      this.setState({
        items: arrItems
      })
    }
    else {
      console.log("Exists already");
    }
  }
  render() {
    return (
      <div>
        <Form
          onSubmit={(event) => this.handleSubmit(event) }
        />
        <br/>
        <List
          onClick={(item) => this.handleRemove(item) }
          items={this.state.items}
        />
      </div>
    )
  }
}

ReactDOM.render(
  <Container />,
  document.getElementById('container')
);
