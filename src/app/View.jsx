import React from 'react'
import PropTypes from 'prop-types'

import AppBar from 'material-ui/AppBar'
import FontIcon from 'material-ui/FontIcon'

import List from './components/ToDoList'

const View = props => <div id='main-container' className='centered'>
  <AppBar
    title='ToDoist'
    iconElementLeft={<FontIcon className='material-icons'>check_circle</FontIcon>}
  />
  <List list={props.todos}
    onCheck={props.onCheck}
  />
</div>

export default View

View.propTypes = {
  todos: PropTypes.array,
  onCheck: PropTypes.func.isRequired,
}
