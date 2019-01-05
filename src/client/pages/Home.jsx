import React from 'react';
import Typography from '@material-ui/core/Typography';
import PageWrapper from '../main/PageWrapper';
import RingsContainer from '../containers/RingsContainer';

const Home = () => (
  <PageWrapper>
    <Typography variant="display1" gutterBottom>
        Rings
    </Typography>
    <RingsContainer />
  </PageWrapper>
);

export default Home;
