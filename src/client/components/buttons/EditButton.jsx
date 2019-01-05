import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import purple from '@material-ui/core/colors/purple';
import EditIcon from '@material-ui/icons/Edit';
import CustomTooltip from '../CustomTooltip';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    color: '#fff',
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700]
    }
  }
});

const EditButton = (props) => {
  const {
    classes, onClick
  } = props;
  return (
    <CustomTooltip title="Edit">
      <Button
        variant="fab"
        mini
        aria-label="Edit"
        id="edit-button"
        className={classes.button}
        onClick={onClick}
      >
        <EditIcon />
      </Button>
    </CustomTooltip>
  );
};

EditButton.propTypes = {
  classes: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
};

export default withStyles(styles)(EditButton);
