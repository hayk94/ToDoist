import React from 'react'
import PropTypes from 'prop-types'

import AppBar from 'material-ui/AppBar'
import FontIcon from 'material-ui/FontIcon'

import List from './components/ToDoList'
import AddButton from './components/AddButton'

const View = props => <div id='main-container' className='centered'>
  <AppBar
    title='ToDoist'
    iconElementLeft={<FontIcon id='logo' className='material-icons'>check_circle</FontIcon>}
  />
  <List
    list={props.todos}
    onCheck={props.onCheck}
    onTextChange={props.onTextChange}
    getFirstInputRef={props.getFirstInputRef}
    onRemove={props.onRemove}
  />
  <AddButton onClick={props.onAddButtonClick} />
</div>

export default View

View.propTypes = {
  todos: PropTypes.array,
  onCheck: PropTypes.func.isRequired,
  onTextChange: PropTypes.func.isRequired,
  onAddButtonClick: PropTypes.func.isRequired,
  getFirstInputRef: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired
}
