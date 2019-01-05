import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import blue from '@material-ui/core/colors/blue';
import UndoIcon from '@material-ui/icons/Undo';
import CustomTooltip from '../CustomTooltip';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    color: '#fff',
    backgroundColor: blue[500],
    '&:hover': {
      backgroundColor: blue[700]
    }
  }
});

const CancelButton = (props) => {
  const {
    classes, onClick
  } = props;
  return (
    <CustomTooltip title="Cancel">
      <Button
        variant="fab"
        mini
        aria-label="Cancel"
        id="cancel-button"
        className={classes.button}
        onClick={onClick}
      >
        <UndoIcon />
      </Button>
    </CustomTooltip>
  );
};

CancelButton.propTypes = {
  classes: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
};

export default withStyles(styles)(CancelButton);
