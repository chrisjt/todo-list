import React from "react";
import ReactDOM from "react-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

function Item(props) {
  return (
    <li>{props.item}</li>
  )
}

const item = "Create a website";

ReactDOM.render(
  <div>
    <form>
      <div class="form-group">
        <label for="inputTodo">To-do item</label>
        <input type="text" class="form-control" id="inputTodo" placeholder="Enter to-do item" />
      </div>
      <button type="submit" class="btn btn-primary">Add</button>
    </form>
    <br/>
    <ul>
      <Item item={item} />
      <Item item={item} />
    </ul>
  </div>,
  document.getElementById('container')
);
