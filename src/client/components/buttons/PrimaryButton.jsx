import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CustomTooltip from '../CustomTooltip';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  }
});

const PrimaryButton = (props) => {
  const {
    classes, onClick, buttonText
  } = props;
  return (
    <CustomTooltip title={buttonText}>
      <Button
        id="primary-button"
        color="primary"
        variant="contained"
        className={classes.button}
        type="button"
        onClick={onClick}
      >{buttonText}
      </Button>
    </CustomTooltip>
  );
};

PrimaryButton.propTypes = {
  classes: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired
};

export default withStyles(styles)(PrimaryButton);
