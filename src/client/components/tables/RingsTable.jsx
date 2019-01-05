import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import RenderedChip from '../formFields/Chip';
import EditButton from '../buttons/EditButton';
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
  }
});

const RingsTable = (props) => {
  const {
    classes, data, handleTableEditClick
  } = props;
  if (data === null) {
    return (
      <Loader />
    );
  }

  const editAction = (id) => {
    handleTableEditClick(id);
  };

  const renderChip = (values) => {
    let tags;
    if (Array.isArray(values)) {
      tags = values;
    } else {
      tags = values.split(/[\s,]+/);
    }
    return tags.map(tag => (
      <div key={tag}>
        <RenderedChip
          key={tag.key}
          label={tag}
        />
      </div>
    ));
  };

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Next to prepare</TableCell>
            <TableCell>Prepare</TableCell>
            <TableCell>In ring</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(d => (
            d.activeShow
            && <>
              <TableRow key={d.id + d.name}>
                <TableCell colSpan="4"><b>{d.name}</b></TableCell>
              </TableRow>
              <TableRow key={d.id} name={d.id}>
                <TableCell>
                  <EditButton onClick={() => editAction(d.id)} />
                </TableCell>
                {(d.rings && d.rings.nextToPrepare)
                  ? (
                    <TableCell>
                      {renderChip(d.rings.nextToPrepare)}
                    </TableCell>)
                  : <TableCell />
                }
                {(d.rings && d.rings.prepare)
                  ? (
                    <TableCell>
                      {renderChip(d.rings.prepare)}
                    </TableCell>)
                  : <TableCell />
                }
                {(d.rings && d.rings.inRing)
                  ? (
                    <TableCell>
                      {renderChip(d.rings.inRing)}
                    </TableCell>)
                  : <TableCell />
                }
              </TableRow>
            </>
          ))
          }
        </TableBody>
      </Table>
    </Paper>
  );
};

RingsTable.propTypes = {
  classes: PropTypes.object.isRequired,
  handleTableEditClick: PropTypes.func.isRequired,
  data: PropTypes.array
};

RingsTable.defaultProps = {
  data: null
};

export default withStyles(styles)(RingsTable);
