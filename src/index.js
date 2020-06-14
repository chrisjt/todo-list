import React from "react";
import ReactDOM from "react-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

function Alert(props) {
  if(props.message != null) {
    const htmlAlert = (
      <div class="alert alert-warning alert-dismissible fade show" role="alert">
        {props.message}
        <button type="button" onClick={props.onClick} class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    );
    return (
      <div>{htmlAlert}</div>
    )
  }
  else {
    return null;
  }
}

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

function ListItemCheckbox(props) {
  return (
    <input type="checkbox" id={props.item}/>
  );
}

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    }
  }
  handleCheckbox() {

  }
  render() {
    return (
      <li key={this.props.item}>
        <ListItemCheckbox
          item={this.props.item}
        />
        &nbsp;&nbsp;
        <button type="button" onClick={this.props.onClick} class="close" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        {this.props.item}
      </li>
    )
  }
}

function List(props) {
  const listItems = props.items.map((item) =>
    <ListItem
      onClick={() => props.onClick(item)}
      item={item}
    />
  );

  return (
    <ul
      style={{
        listStyleType: 'none'
      }}
    >
      {listItems}
    </ul>
  )
}

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      message: null,
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
  handleMessageClose() {
    this.setState({
      message: null
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
      this.setState({
        message: "Todo item exists already."
      })
    }
  }
  render() {
    return (
      <div>
        <Alert
          onClick={() => this.handleMessageClose() }
          message={this.state.message}
        />
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
