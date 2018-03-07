import React from 'react'
import PropTypes from 'prop-types'

import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'

const ItemDetails = props => <div>
  <Dialog
    title='Details'
    actions={<FlatButton
      label='Close'
      primary
      onClick={props.onClose}
    />}
    modal={false}
    open={props.isOpen}
    onRequestClose={props.onClose}
  >
    {props.text}
  </Dialog>
</div>

export default ItemDetails

ItemDetails.propTypes = {
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool,
  text: PropTypes.string
}
