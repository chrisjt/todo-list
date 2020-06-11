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
    this.state = {
      items: ['Create code', 'Commit changes to .git', 'Run server']
    }
  }
  render() {
    return (
      <div>
        <Form />
        <br/>
        <List items={this.state.items}/>
      </div>
    )
  }
}

const item = "Create a website";

ReactDOM.render(
  <Container />,
  document.getElementById('container')
);
