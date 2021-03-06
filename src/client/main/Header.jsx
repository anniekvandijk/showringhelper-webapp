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
    const { classes, headerText } = this.props;
    return (
      <AppBar position="absolute" className={classes.appBar}>
        <Toolbar>
          <Typography variant="title" color="inherit" noWrap>
            { headerText !== null && headerText.map(d => (
              d.activeShow
              && `Showring ${d.name}`
            ))}
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  headerText: PropTypes.array
};

Header.defaultProps = {
  headerText: 'Geen active show'
};

const mapStateToProps = state => ({
  headerText: state.shows.shows
});

export default connect(mapStateToProps)(withStyles(styles)(Header));
