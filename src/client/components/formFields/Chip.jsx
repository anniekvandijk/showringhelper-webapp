import React from 'react';
import Chip from '@material-ui/core/Chip';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  chip: {
    margin: theme.spacing.unit * 0.5
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
        color="primary"
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
