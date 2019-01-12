import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MediaQuery from 'react-responsive';
import RingsTable from '../components/tables/RingsTable';
import RingsTableMobile from '../components/tables/RingsTableMobile';
import { createRecords } from '../../redux/showsReducer';
import { database } from '../../server/firebase';
import Loader from '../components/Loader';

class RingsContainer extends React.PureComponent {
  componentDidMount() {
    const { handleSnapshot } = this.props;

    database.collection('shows')
      .where('activeShow', '==', true)
      .onSnapshot(() => {
        const shows = [];
        database.collection('shows').get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            const Show = {};
            Show.id = doc.id;
            Object.keys(doc.data()).map((key) => {
              Show[key] = doc.data()[key];
            });
            shows.push(Show);
          });
          handleSnapshot(shows);
        });
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

    if (shows === null) {
      return (
        <Loader />
      );
    }

    return (
      <div id="ringsscontainer">
        {shows !== null && Array.isArray(shows)
        && (
          <MediaQuery minDeviceWidth={700}>
            {(matches) => {
              if (matches) {
                return <RingsTable data={shows}></RingsTable>;
              } else {
                return <RingsTableMobile data={shows}></RingsTableMobile>;
              }
            }}
          </MediaQuery>
        )}
      </div>
    );
  }
}

RingsContainer.propTypes = {
  handleSnapshot: PropTypes.func.isRequired,
  shows: PropTypes.array
};

RingsContainer.defaultProps = {
  shows: null
};

const mapStateToProps = state => ({
  shows: state.shows.shows
});

const mapDispatchToProps = dispatch => ({
  handleSnapshot: snapshot => dispatch(createRecords(snapshot))
});

export default connect(mapStateToProps, mapDispatchToProps)(RingsContainer);
