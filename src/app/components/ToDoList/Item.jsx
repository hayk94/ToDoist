import React from 'react'
import PropTypes from 'prop-types'

import { ListItem } from 'material-ui/List'
import IconButton from 'material-ui/IconButton'
import FontIcon from 'material-ui/FontIcon'
import Checkbox from 'material-ui/Checkbox'
import Divider from 'material-ui/Divider'

const Item = props => <div>
  <ListItem
    rightIconButton={<IconButton touch>
      <FontIcon className='material-icons'>delete</FontIcon>
    </IconButton>}
    className='todo-item'
    primaryText='Notifications'
    leftCheckbox={<Checkbox />} />
  <Divider />
</div>

export default Item

Item.propTypes = {}
