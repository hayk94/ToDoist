import React from 'react'
import PropTypes from 'prop-types'

import { List } from 'material-ui/List'

import Item from './Item'

const ToDoList = props => <div id='list-container' className='centered'>
  <List>
    <Item />
    <Item />
    <Item />
  </List>
</div>

export default ToDoList

ToDoList.propTypes = {
}
