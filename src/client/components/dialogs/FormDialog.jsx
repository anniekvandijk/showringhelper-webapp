import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import CancelButton from '../buttons/CancelButton';
import SubmitButton from '../buttons/SubmitButton';
import DeleteButton from '../buttons/DeleteButton';

const FormDialog = (props) => {
  const {
    header, reset, children, handleSubmit, pristine, submitting, initialValues,
    formDialogOpen, handleFormDialogSubmitClick, handleFormDialogCancelClick,
    showDeleteButton, handleFormDialogDeleteClick
  } = props;

  const submitAction = (formValues) => {
    handleFormDialogSubmitClick(formValues);
    reset();
  };

  const deleteAction = () => {
    handleFormDialogDeleteClick();
    reset();
  };

  const cancelAction = () => {
    handleFormDialogCancelClick();
    reset();
  };

  return (
    <Dialog
      id="form-dialog"
      open={formDialogOpen}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">{header}</DialogTitle>
      <form onSubmit={handleSubmit(submitAction)}>
        <DialogContent id="form-dialog-description">
          {children}
        </DialogContent>
        <DialogActions id="form-dialog-actions">
          <CancelButton
            onClick={cancelAction}
          />
          <SubmitButton
            pristine={pristine}
            submitting={submitting}
          />
          { initialValues !== null && showDeleteButton
            && <DeleteButton onClick={deleteAction} />
          }
        </DialogActions>
      </form>
    </Dialog>
  );
};


FormDialog.propTypes = {
  header: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  handleFormDialogSubmitClick: PropTypes.func.isRequired,
  handleFormDialogCancelClick: PropTypes.func.isRequired,
  handleFormDialogDeleteClick: PropTypes.func,
  showDeleteButton: PropTypes.bool,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
  initialValues: PropTypes.object,
  formDialogOpen: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]).isRequired
};

FormDialog.defaultProps = {
  showDeleteButton: false,
  pristine: true,
  submitting: false,
  initialValues: null,
  formDialogOpen: false,
  handleFormDialogDeleteClick: null
};

const config = {
  form: 'Form',
  enableReinitialize: true
};

export default reduxForm(config)(FormDialog);
