import React from 'react';
import Chip from '@material-ui/core/Chip';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    float: 'left'
  },
  chip: {
    margin: theme.spacing.unit * 0.5,
    padding: theme.spacing.unit * 1.5,
    fontSize: '40px',
    [theme.breakpoints.down('xs')]: {
      fontSize: '10px'
    },
    fontWeight: 'bold',
    width: '120px',
    [theme.breakpoints.down('xs')]: {
      width: '60px'
    }
  }
});

const RenderedChip = (props) => {
  const {
    label, classes, input, ...extra
  } = props;
  return (
    <div className={classes.root}>
      <Chip
        className={classes.chip}
        color="secondary"
        label={label}
        {...input}
        {...extra}
      />
    </div>
  );
};

RenderedChip.propTypes = {
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired
};

export default withStyles(styles)(RenderedChip);
