import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      task: ""
    };
  }

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitTodo = e => {
      e.preventDefault();
      this.props.addTodo(this.state.task);
      this.setState({
          task: ""
      })
  }

  render() {
    return (
      <form className="todo-form">
        <input type="text" name='task' value={this.state.task} onChange={this.handleChanges} />
        <button onClick={this.submitTodo}>Add Todo</button>
      </form>
    );
  }
}

export default TodoForm;
