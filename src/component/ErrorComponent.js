import React from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import Alert from '@material-ui/lab/Alert'

const ErrorComponent = (props) => {
  const {
    open,
    handleClose,
    commentStatus
  } = props

  return (
    <Snackbar open={open} onClose={handleClose}>
      <Alert severity="error"> {commentStatus} </Alert>
    </Snackbar>
  )
}

export default ErrorComponent;