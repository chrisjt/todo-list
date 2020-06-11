import React from "react";
import ReactDOM from "react-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

function Form(props) {
  return (
    <form>
      <div class="form-group">
        <label for="inputTodo">To-do item</label>
        <input type="text" class="form-control" id="inputTodo" placeholder="Enter to-do item" />
      </div>
      <button type="submit" class="btn btn-primary">Add</button>
    </form>
  )
}

function Item(props) {
  return (
    <li>{props.item}</li>
  )
}

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }
  render() {
    return (
      <div>
        <Form />
        <br/>
        <ul>
          <Item item={item} />
          <Item item={item} />
        </ul>
      </div>
    )
  }
}

const item = "Create a website";

ReactDOM.render(
  <Container />,
  document.getElementById('container')
);
