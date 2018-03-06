import React from 'react'
import PropTypes from 'prop-types'

import { List } from 'material-ui/List'

import Item from './Item'

const ToDoList = props => <div id='list-container' className='centered'>
  <List>
    {props.list.map((item, index) => <Item
      _id={item._id}
      key={item._id}
      text={item.text}
      done={item.done}
      onCheck={props.onCheck}
      onTextChange={props.onTextChange}
      getRef={props.getFirstInputRef(index)}
      onRemove={props.onRemove}
    />)}
  </List>
</div>

export default ToDoList

ToDoList.propTypes = {
  list: PropTypes.array,
  onCheck: PropTypes.func.isRequired,
  onTextChange: PropTypes.func.isRequired,
  getFirstInputRef: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired
}
