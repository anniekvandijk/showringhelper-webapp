import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import green from '@material-ui/core/colors/green';
import SaveIcon from '@material-ui/icons/Save';
import CustomTooltip from '../CustomTooltip';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    color: '#fff',
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700]
    }
  }
});

const SubmitButton = (props) => {
  const {
    classes, pristine, submitting
  } = props;
  return (
    <CustomTooltip title="Save">
      <span>
        <Button
          mini
          id="submit-button"
          aria-label="Submit"
          variant="fab"
          disabled={pristine || submitting}
          className={classes.button}
          type="submit"
        ><SaveIcon />
        </Button>
      </span>
    </CustomTooltip>
  );
};

SubmitButton.propTypes = {
  classes: PropTypes.object.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired
};

export default withStyles(styles)(SubmitButton);
