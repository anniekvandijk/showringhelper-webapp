import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import CancelButton from '../buttons/CancelButton';
import OkButton from '../buttons/OkButton';

const AlertDialog = (props) => {
  const {
    alertDialogOpen, handleAlertDialogOkClick, handleAlertDialogCancelClick, title, children
  } = props;
  return (
    <Dialog
      id="alert-dialog"
      open={alertDialogOpen}
      aria-labelledby="alert-dialog-title"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent id="alert-dialog-content">
        {children}
      </DialogContent>
      <DialogActions id="alert-dialog-actions">
        <CancelButton
          onClick={handleAlertDialogCancelClick}
        />
        <OkButton
          onClick={handleAlertDialogOkClick}
        />
      </DialogActions>
    </Dialog>
  );
};

AlertDialog.propTypes = {
  handleAlertDialogCancelClick: PropTypes.func.isRequired,
  handleAlertDialogOkClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]).isRequired,
  title: PropTypes.string.isRequired,
  alertDialogOpen: PropTypes.bool
};

AlertDialog.defaultProps = {
  alertDialogOpen: false
};

export default AlertDialog;
