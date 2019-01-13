import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
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

    if (shows === []) {
      return (
        <Typography variant="display2" color="inherit" noWrap>
          Er zijn geen active shows
        </Typography>
      );
    }

    return (
      <div id="ringsscontainer">
        {shows !== null && Array.isArray(shows) && shows !== []
        && (
          <MediaQuery minDeviceWidth={900}>
            {(matches) => {
              if (matches) {
                return <RingsTable data={shows} />;
              }
              return <RingsTableMobile data={shows} />;
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
