import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Home from '../client/pages/Home';

const styles = () => ({
  root: {
    height: '100%'
  }
});

const Routes = (props) => {
  const { classes } = props;
  return (
    <Switch className={classes.root}>
      <Route exact path="/" component={Home} />
    </Switch>
  );
};

Routes.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Routes);
