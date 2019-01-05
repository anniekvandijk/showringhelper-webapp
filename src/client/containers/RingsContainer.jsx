import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Field } from 'redux-form';
import FormDialog from '../components/dialogs/FormDialog';
import RenderedTextField from '../components/formFields/TextField';
import RingsTable from '../components/tables/RingsTable';
import {
  updateRecord, unsetUpdateRecord, readRecords, setUpdateRecord
} from '../../redux/showsReducer';

class RingsContainer extends React.PureComponent {
  state = {
    formDialogOpen: false
  };

  render() {
    const {
      shows, loadData, recordUpdate, clearUpdateRecord,
      setRecordToUpdate, initialValues
    } = this.props;
    const { formDialogOpen } = this.state;
    const header = (initialValues !== null && initialValues.name).toString();

    const submitRings = (values) => {
      // update record
      if (initialValues !== null) {
        recordUpdate(initialValues.id, values);
        clearUpdateRecord(initialValues.id);
      }
      this.setState({ formDialogOpen: false });
      loadData();
    };

    const editShow = (id) => {
      setRecordToUpdate(id);
      this.setState({ formDialogOpen: true });
    };

    const cancelForm = () => {
      if (initialValues !== null) {
        clearUpdateRecord(initialValues.id);
      }
      this.setState({ formDialogOpen: false });
    };

    return (
      <div id="ringsscontainer">
        <FormDialog
          header={header}
          formDialogOpen={formDialogOpen}
          initialValues={initialValues}
          handleFormDialogSubmitClick={values => submitRings(values)}
          handleFormDialogCancelClick={cancelForm}
          showDeleteButton={false}
        >
          <Field
            name="rings.nextToPrepare"
            type="text"
            label="Next to prepare"
            helperText="Comma seperated list of ring numbers"
            component={RenderedTextField}
          />
          <Field
            name="rings.prepare"
            type="text"
            label="Prepare"
            helperText="Comma seperated list of ring numbers"
            component={RenderedTextField}
          />
          <Field
            name="rings.inRing"
            type="text"
            label="In Ring"
            helperText="Comma seperated list of ring numbers"
            component={RenderedTextField}
          />
        </FormDialog>
        <RingsTable
          data={shows}
          handleTableEditClick={id => editShow(id)}
        />
      </div>
    );
  }
}

RingsContainer.propTypes = {
  loadData: PropTypes.func.isRequired,
  setRecordToUpdate: PropTypes.func.isRequired,
  recordUpdate: PropTypes.func.isRequired,
  clearUpdateRecord: PropTypes.func.isRequired,
  initialValues: PropTypes.object,
  shows: PropTypes.array
};

RingsContainer.defaultProps = {
  initialValues: null,
  shows: null
};

const mapStateToProps = state => ({
  initialValues: state.shows.updateShow,
  shows: state.shows.shows
});

const mapDispatchToProps = dispatch => ({
  loadData: () => dispatch(readRecords('/api/shows/')),
  setRecordToUpdate: showId => dispatch(setUpdateRecord(showId)),
  recordUpdate: (showId, show) => dispatch(updateRecord(`/api/shows/${showId}`, show)),
  clearUpdateRecord: showId => dispatch(unsetUpdateRecord(showId))
});

export default connect(mapStateToProps, mapDispatchToProps)(RingsContainer);
