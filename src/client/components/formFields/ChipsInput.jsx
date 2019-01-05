import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

// uncontrolled input
const styles = theme => ({
  chip: {
    margin: theme.spacing.unit * 0.5
  }
});

class RenderedChipsInput extends React.PureComponent {

  render() {
    const {
      classes, fieldName, defaultValues, input, ...extra
    } = this.props;

    console.log(input);

    const handleDelete = (chipIndex) => {
      input.value = input.value.splice[chipIndex, 1];
      console.log(input);
    };

    return (
      <div className={classes.root}>
        <div>
          <TextField
            id="chipInputField"
            label={fieldName}
            helperText="Add extra number"
            className={classes.textField}
          />
        </div>
        <div>
          {defaultValues && defaultValues.map((tagValue, index) => (
            <Chip
              key={tagValue}
              className={classes.chip}
              label={tagValue}
              color="primary"
              variant="outlined"
              onDelete={() => handleDelete(index)}
            />
          ))
          }
        </div>
        <hr />
      </div>
    );
  }
}

RenderedChipsInput.propTypes = {
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};

export default withStyles(styles)(RenderedChipsInput);
