import React, { Component } from 'react'

import View from './View'

import { insertAt } from '../functions'

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

  onTextChange = (_id, text) => {
    const { todos } = this.state
    const item = todos.find(todo => todo._id === _id)
    item.text = text
    const index = todos.indexOf(item)
    let newTodos = todos.filter(todo => todo._id !== _id)
    newTodos = insertAt(newTodos, index, item)
    this.setState({ todos: newTodos })
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
    this.setState({ todos })
  }

  render () {
    return (
      <View
        onTextChange={this.onTextChange}
        onCheck={this.onCheck}
        todos={this.state.todos}
      />
    )
  }
}

export default Container
