import React from 'react'
import PropTypes from 'prop-types'

import { ListItem } from 'material-ui/List'
import IconButton from 'material-ui/IconButton'
import FontIcon from 'material-ui/FontIcon'
import Checkbox from 'material-ui/Checkbox'
import Divider from 'material-ui/Divider'

import { RIEInput } from 'riek'

const Item = props => <div>
  <ListItem
    rightIconButton={<div>
      <IconButton
        onClick={() => props.onMoreClick(props._id)}
        touch
      >
        <FontIcon className='material-icons'>more</FontIcon>
      </IconButton>
      <IconButton
        onClick={() => props.onRemove(props._id)}
        touch
      >
        <FontIcon className='material-icons'>delete</FontIcon>
      </IconButton>
    </div>}
    className='todo-item'
    primaryText={<RIEInput
      className={`todo ${props.done ? 'done' : null}`}
      classEditing='input-editing'
      ref={props.getRef}
      value={props.text}
      change={({text}) => props.onTextChange(props._id, text)}
      propName='text'
    />}
    leftCheckbox={<Checkbox checked={props.done} onCheck={(event, checked) => props.onCheck(props._id, checked)} />} />
  <Divider />
</div>

export default Item

Item.propTypes = {
  _id: PropTypes.string,
  text: PropTypes.string,
  done: PropTypes.bool,
  onCheck: PropTypes.func.isRequired,
  onTextChange: PropTypes.func.isRequired,
  ref: PropTypes.func,
  onRemove: PropTypes.func.isRequired,
  onMoreClick: PropTypes.func.isRequired
}
