import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import orange from '@material-ui/core/colors/orange';
import EditButton from '../buttons/EditButton';
import RenderedSwitch from '../formFields/Switch';
import Loader from '../Loader';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    padding: '5px'
  },
  table: {
    width: '100%'
  },
  colorSwitchBase: {
    color: orange[300],
    '&$colorChecked': {
      color: orange[500],
      '& + $colorBar': {
        backgroundColor: orange[500]
      }
    }
  },
  colorChecked: {},
  colorBar: {}
});

const DefaultTable = (props) => {
  const {
    classes, data, tableHeaders, shownDataValues, handleTableEditClick
  } = props;
  if (data === null) {
    return (
      <Loader />
    );
  }
  if (tableHeaders.length !== shownDataValues.length) {
    throw new Error('headers and shown values not equal');
  }

  const editAction = (id) => {
    handleTableEditClick(id);
  };

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell />
            {tableHeaders.map(header => (
              <TableCell key={header}>{header}</TableCell>
            ))
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(d => (
            <TableRow key={d.id} name={d.id}>
              <TableCell>
                <EditButton onClick={() => editAction(d.id)} />
              </TableCell>
              {Object.keys(d).map((key) => {
                if (shownDataValues.includes(key)) {
                  if (d[key] === true || d[key] === false) {
                    return (
                      <TableCell key={d.id + d[key]}>
                        <RenderedSwitch
                          disabled
                          checked={d[key]}
                          classes={{
                            switchBase: classes.colorSwitchBase,
                            checked: classes.colorChecked,
                            bar: classes.colorBar
                          }}
                        />
                      </TableCell>
                    );
                  }
                  return (
                    <TableCell key={d.id + d[key]}>{d[key]}</TableCell>
                  );
                }
                return null;
              })}
            </TableRow>
          ))
          }
        </TableBody>
      </Table>
    </Paper>
  );
};

DefaultTable.propTypes = {
  classes: PropTypes.object.isRequired,
  handleTableEditClick: PropTypes.func.isRequired,
  data: PropTypes.array,
  tableHeaders: PropTypes.array.isRequired,
  shownDataValues: PropTypes.array.isRequired
};

DefaultTable.defaultProps = {
  data: null
};

export default withStyles(styles)(DefaultTable);
