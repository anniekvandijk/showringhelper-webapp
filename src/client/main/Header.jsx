import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  }
});

class Header extends React.PureComponent {
  render() {
    const { classes, headerText: header } = this.props;
    return (
      <AppBar position="absolute" className={classes.appBar}>
        <Toolbar>
          <Typography variant="title" color="inherit" noWrap>
            {`Ringshelper manager > ${header}`}
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  headerText: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  headerText: state.navigation.menu.headerText
});

export default connect(mapStateToProps)(withStyles(styles)(Header));
