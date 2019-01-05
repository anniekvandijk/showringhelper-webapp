import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import green from '@material-ui/core/colors/green';
import CheckIcon from '@material-ui/icons/Check';
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

const OkButton = (props) => {
  const { classes, onClick } = props;
  return (
    <CustomTooltip title="OK">
      <Button
        mini
        id="ok-button"
        aria-label="OK"
        variant="fab"
        className={classes.button}
        type="button"
        onClick={onClick}
      ><CheckIcon />
      </Button>
    </CustomTooltip>
  );
};

OkButton.propTypes = {
  classes: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
};

export default withStyles(styles)(OkButton);
