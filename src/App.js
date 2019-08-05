import React from 'react';

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
  }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
