import React from 'react'
import PropTypes from 'prop-types'

import AppBar from 'material-ui/AppBar'
import FontIcon from 'material-ui/FontIcon'

const View = props => <div>
  <AppBar
    title='ToDoist'
    iconElementLeft={<FontIcon className='material-icons'>check_circle</FontIcon>}
  />
</div>

export default View

View.propTypes = {
}
