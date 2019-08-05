import React from 'react';
import TodoList from './components/TodoComponents/TodoList'

const todosData = [
  {
    task: 'Take out the garbage',
    id: Date.now(),
    completed: false,
  },
  {
    task: 'Learn class components',
    id: Date.now(),
    completed: false,
  },
  {
    task: 'Make dinner',
    id: Date.now(),
    completed: false,
  },
  {
    task: 'Pay bills',
    id: Date.now(),
    completed: false,
  },
  {
    task: 'Complete MVP',
    id: Date.now(),
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

    toggleItem = id => {
      this.setState({
        todos: this.state.todos.map(todo => {
          if (todo.id === id) {
            return {
              ...todo,
              completed: !todo.completed
            }
          } else {
            return todo
          }
        })
      })
    }

  }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
