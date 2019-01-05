import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '90%'
  }
});

const RenderedTextField = (props) => {
  const {
    classes, label, placeholder, multiline, helperText, input, ...extra
  } = props;
  return (
    <TextField
      id="textfield"
      className={classes.textField}
      label={label}
      helperText={helperText}
      multiline={multiline}
      {...multiline && { rows: '4' }}
      {...input}
      {...extra}
    />
  );
};


RenderedTextField.propTypes = {
  classes: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  multiline: PropTypes.bool,
  helperText: PropTypes.string
};

RenderedTextField.defaultProps = {
  multiline: false,
  helperText: ''
};

export default withStyles(styles)(RenderedTextField);
