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

  render () {
    return (
      <View
        todos={this.state.todos}
      />
    )
  }
}

export default Container
