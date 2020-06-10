import React from "react";
import ReactDOM from "react-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

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
      <li>Item 1</li>
    </ul>
  </div>,
  document.getElementById('container')
);
