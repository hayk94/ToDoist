import _ from 'lodash'
import React, { Component } from 'react'

import View from './View'

import { insertAt } from '../functions'

import randomstring from 'randomstring'

import axios from 'axios'

import {
  getTodosUrl,
  getGroupIdUrl,
  getUserIdUrl,
  getUpdateTodosUrl
} from './getUrls'

class Container extends Component {
  state = {
    todos: [],
    isLoading: true
  }

  groupId = null
  userId = null

  componentWillMount = async () => {
    const name = 'hayk_safaryan'
    const groupIdRes = await axios.get(getGroupIdUrl(name))
    const { groupId } = groupIdRes.data
    this.groupId = groupId
    const userIdRes = await axios.get(getUserIdUrl(name))
    const { userId } = userIdRes.data
    this.userId = userId
    const todosRes = await axios.get(getTodosUrl(groupId, userId))
    const todos = _.map(todosRes.data, item => item)
    this.setState({ todos })
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
    if (this.state.isLoading === true) return this.setState({ isLoading: false })

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
      id: randomstring.generate(7),
      text: 'What do you want to do?',
      done: false
    }
    const todos = insertAt(this.state.todos, 0, todo)
    this.setState({ todos }, this.updateTodos)
  }

  // // //

  onRemove = (id) => this.setState({
    todos: this.state.todos.filter(todo => todo.id !== id)
  }, this.updateTodos)

  onTextChange = (id, text) => {
    const { todos } = this.state
    const item = todos.find(todo => todo.id === id)
    item.text = text
    const index = todos.indexOf(item)
    let newTodos = todos.filter(todo => todo.id !== id)
    newTodos = insertAt(newTodos, index, item)
    this.setState({ todos: newTodos }, this.updateTodos)
  }

  onCheck = (id, checked) => {
    const item = this.state.todos.find(todo => todo.id === id)
    item.done = checked
    const newList = this.state.todos.filter(todo => todo.id !== id)
    let todos = [item, ...newList]
    if (checked) {
      // items mark as done go to the bottom of the list
      todos = [...newList, item]
    }
    this.setState({ todos }, this.updateTodos)
  }

  updateTodos = () => {
    const {
      groupId,
      userId,
      state: { todos }
    } = this
    axios.put(getUpdateTodosUrl(groupId, userId), todos)
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
