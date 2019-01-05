import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';

const styles = theme => ({
  tooltip: {
    background: theme.palette.common.white,
    color: theme.palette.text.primary,
    boxShadow: theme.shadows[1],
    fontSize: 11
  }
});

const CustomTooltip = (props) => {
  const { classes, children, title } = props;
  return (
    <Tooltip
      id="tooltip"
      title={title}
      enterDelay={100}
      leaveDelay={100}
      disableFocusListener
      TransitionComponent={Zoom}
      classes={{ tooltip: classes.tooltip }}
    >
      {children}
    </Tooltip>
  );
};

CustomTooltip.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]).isRequired
};

export default withStyles(styles)(CustomTooltip);
