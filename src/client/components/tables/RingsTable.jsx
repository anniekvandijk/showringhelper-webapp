import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import Typography from '@material-ui/core/Typography';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import RenderedChip from '../formFields/Chip';
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
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default
    }
  }
});

const RingsTable = (props) => {
  const {
    classes, data
  } = props;
  if (data === null) {
    return (
      <Loader />
    );
  }

  const renderChip = (values) => {
    let tags;
    if (Array.isArray(values)) {
      tags = values;
    } else {
      tags = values.split(/[\s,]+/);
    }
    return tags.map(tag => (
      <RenderedChip
        key={tag.key}
        label={tag}
      />
    ));
  };

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        {data.map(d => (
          d.activeShow
          && <>
            <TableRow width="100%" className={classes.row}>
              <TableCell colSpan="2">
                <Typography variant="display1" gutterBottom>
                  {d.name}
                </Typography>
              </TableCell>
            </TableRow>
              {d.rings && d.rings.nextToPrepare
              && (
                <TableRow className={classes.row}>
                  <TableCell width="25%">
                    <b>Volgende opstellen voor ring</b>
                  </TableCell>
                  <TableCell>
                    {renderChip(d.rings.nextToPrepare)}
                  </TableCell>
                </TableRow>
              )
              }
              {d.rings && d.rings.prepare
              && (
                <TableRow className={classes.row}>
                  <TableCell>
                    <b>Opstellen voor ring</b>
                  </TableCell>
                  <TableCell>
                    {renderChip(d.rings.prepare)}
                  </TableCell>
                </TableRow>
              )
              }
              {d.rings && d.rings.inRing
              && (
                <TableRow className={classes.row}>
                  <TableCell>
                    <b>Nu in de ring</b>
                  </TableCell>
                  <TableCell>
                    {renderChip(d.rings.inRing)}
                  </TableCell>
                </TableRow>
              )
              }
        </>
        ))
      }
      </Table>
    </Paper>
  );
};

RingsTable.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.array
};

RingsTable.defaultProps = {
  data: null
};

export default withStyles(styles)(RingsTable);
