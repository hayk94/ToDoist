import React from 'react'
import PropTypes from 'prop-types'

import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'

const AddButton = ({onClick}) => <div id='add-button-container' className='centered'>
  <FloatingActionButton
    onClick={onClick}
    secondary>
    <ContentAdd />
  </FloatingActionButton>
</div>

export default AddButton

AddButton.propTypes = {
  onClick: PropTypes.func.isRequired
}
