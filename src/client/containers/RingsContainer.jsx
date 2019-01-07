import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RingsTable from '../components/tables/RingsTable';
import { readRecords } from '../../redux/showsReducer';
import { database } from '../../server/firebase';

class RingsContainer extends React.PureComponent {
  componentDidMount() {
    const { loadData } = this.props;

    database.collection('shows')
      .where('activeShow', '==', true)
      .onSnapshot((docSnapshot) => {
        console.log(`Received doc snapshot: ${docSnapshot}`);
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

    console.log('shows');
    console.log(shows);

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
  shows: state.shows.shows
});

const mapDispatchToProps = dispatch => ({
  loadData: () => dispatch(readRecords('/api/shows/'))
});

export default connect(mapStateToProps, mapDispatchToProps)(RingsContainer);
