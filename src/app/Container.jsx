import React, { Component } from 'react'

import View from './View'

class Container extends Component {
  state = {
    todos: [
      {
        _id: '1',
        text: 'do me!',
        done: false
      },
      {
        _id: '2',
        text: 'no do me!',
        done: false
      },
      {
        _id: '3',
        text: 'meeee!!!',
        done: true
      }
    ]
  }

  onCheck = (_id, checked) => {
    const item = this.state.todos.find(todo => todo._id === _id)
    item.done = checked
    const newList = this.state.todos.filter(todo => todo._id !== _id)
    let todos = [item, ...newList]
    if (checked) {
      // items mark as done go to the bottom of the list
      todos = [...newList, item]
    }
    this.setState({todos})
  }

  render () {
    return (
      <View
        onCheck={this.onCheck}
        todos={this.state.todos}
      />
    )
  }
}

export default Container
