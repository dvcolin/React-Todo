import React from 'react';
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'
import './components/TodoComponents/Todo.css'
const todosData = [
  {
    task: 'Take out the garbage',
    id: Date.now() + Math.random(),
    completed: false,
  },
  {
    task: 'Learn class components',
    id: Date.now() + Math.random(),
    completed: false,
  },
  {
    task: 'Make dinner',
    id: Date.now() + Math.random(),
    completed: false,
  },
  {
    task: 'Pay bills',
    id: Date.now() + Math.random(),
    completed: false,
  },
  {
    task: 'Complete MVP',
    id: Date.now() + Math.random(),
    completed: false,
  },
]


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: todosData,
    }
  }

  toggleItem = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        } else {
          return todo;
        }
      })
    })
  }

  addTodo = itemName => {
    const newTodo = {
      task: itemName,
      id: Date.now(),
      completed: false,
    }

    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  clearCompleted = () => {
    this.setState({
      todos: this.state.todos.filter(todo => !todo.completed)
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.todos} toggleItem={this.toggleItem} />
        <TodoForm addTodo={this.addTodo} />
        <button onClick={this.clearCompleted}>Clear Completed</button>
      </div>
    );
  }
}

export default App;
