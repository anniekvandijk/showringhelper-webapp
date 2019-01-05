import React from 'react';
import Typography from '@material-ui/core/Typography';
import PageWrapper from '../main/PageWrapper';
import ShowsContainer from '../containers/ShowsContainer';


const Shows = () => (
  <PageWrapper>
    <Typography variant="display1" gutterBottom>
      Shows
    </Typography>
    <ShowsContainer />
  </PageWrapper>
);

export default Shows;
