import React from 'react';
import Switch from '@material-ui/core/Switch';
import PropTypes from 'prop-types';
import FormControlLabel from '@material-ui/core/FormControlLabel';


const RenderedSwitch = (props) => {
  const {
    disabled, label, value, input, ...extra
  } = props;
  return (
    <FormControlLabel
      id="switch"
      control={(
        <Switch
          disabled={disabled}
          {...input}
          {...extra}
          value={value}
        />
        )
      }
      label={label}
    />
  );
};

RenderedSwitch.propTypes = {
  label: PropTypes.string
};

RenderedSwitch.defaultProps = {
  label: ''
};

export default RenderedSwitch;
