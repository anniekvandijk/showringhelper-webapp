import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Home from '../client/pages/Home';
import Shows from '../client/pages/Shows';
import About from '../client/pages/About';
import Settings from '../client/pages/Settings';
import Rings from '../client/pages/Rings';

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
      <Route exact path="/home" component={Home} />
      <Route exact path="/shows" component={Shows} />
      <Route exact path="/rings" component={Rings} />
      <Route exact path="/about" component={About} />
      <Route exact path="/settings" component={Settings} />
    </Switch>
  );
};

Routes.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Routes);
