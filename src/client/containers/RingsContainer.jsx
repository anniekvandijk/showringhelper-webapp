import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RingsTable from '../components/tables/RingsTable';
import { readRecords } from '../../redux/showsReducer';

class RingsContainer extends React.PureComponent {

  render() {
    const {
      shows, loadData
    } = this.props;

    return (
      <div id="ringsscontainer">
        <RingsTable
          data={shows}
        />
      </div>
    );
  }
}

RingsContainer.propTypes = {
  loadData: PropTypes.func.isRequired,
  shows: PropTypes.array
};

RingsContainer.defaultProps = {
  shows: null
};

const mapStateToProps = state => ({
  initialValues: state.shows.updateShow,
  shows: state.shows.shows
});

const mapDispatchToProps = dispatch => ({
  loadData: () => dispatch(readRecords('/api/shows/'))
});

export default connect(mapStateToProps, mapDispatchToProps)(RingsContainer);
