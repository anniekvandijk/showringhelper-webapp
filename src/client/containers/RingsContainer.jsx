import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RingsTable from '../components/tables/RingsTable';
import { readRecords } from '../../redux/showsReducer';
import { database } from '../../server/firebase';
import Loader from '../components/Loader';

class RingsContainer extends React.PureComponent {
  componentDidMount() {
    const { loadData } = this.props;

    database.collection('shows')
      .where('activeShow', '==', true)
      .onSnapshot(() => {
        loadData();
      }, (err) => {
        console.log(`Encountered error: ${err}`);
      });
  }

  componentWillUnmount() {
    const unsubscribe = database.collection('shows')
      .onSnapshot(() => {});
    unsubscribe();
  }

  render() {
    const { shows } = this.props;

    if (shows !== null) {
      console.log('shows');
      console.log(shows);
    }

    if (shows === null) {
      return (
        <Loader />
      );
    }

    return (
      <div id="ringsscontainer">
        {shows !== null && Array.isArray(shows)
        && (<RingsTable
          data={shows}
        />
        )}
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
  shows: state.shows.shows
});

const mapDispatchToProps = dispatch => ({
  loadData: () => dispatch(readRecords('/api/shows'))
});

export default connect(mapStateToProps, mapDispatchToProps)(RingsContainer);
