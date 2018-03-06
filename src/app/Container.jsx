import React, { Component } from 'react'

import View from './View'

import { insertAt } from '../functions'

import randomstring from 'randomstring'

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

  // NOTE: When adding new items
  // new element is inserted into the state todos at index 0
  // component updates and we focus to edit the new todo
  firstInputRef = null

  getFirstInputRef = index => {
    if (index == 0) return elem => this.firstInputRef = elem
    return null
  }

  componentDidUpdate (prevProps, prevState) {
     if (this.firstInputRef) {
       if (prevState.todos.length < this.state.todos.length) {
         console.log('focus!', this.firstInputRef)
         this.firstInputRef.startEditing()
       }
     }
  }

  onAddButtonClick = () => {
    console.log('click')
    this.addNewToDo()
  }

  addNewToDo = () => {
    const todo = {
      _id: randomstring.generate(7),
      text: 'What do you want to do?',
      done: false
    }
    const todos = insertAt(this.state.todos, 0, todo)
    this.setState({ todos })
  }

  // // //

  onRemove = (_id) => this.setState({
    todos: this.state.todos.filter(todo => todo._id !== _id)
  })

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
        onRemove={this.onRemove}
        getFirstInputRef={this.getFirstInputRef}
        onAddButtonClick={this.onAddButtonClick}
        onTextChange={this.onTextChange}
        onCheck={this.onCheck}
        todos={this.state.todos}
      />
    )
  }
}

export default Container
