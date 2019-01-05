import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2
  }
});

const Loader = (props) => {
  const { classes } = props;
  return (
    <div id="loader">
      <CircularProgress className={classes.progress} color="secondary" thickness={6} />
    </div>
  );
};

Loader.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Loader);
