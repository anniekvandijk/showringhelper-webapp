import React from 'react';
import Typography from '@material-ui/core/Typography';
import PageWrapper from '../main/PageWrapper';
import RingsContainer from '../containers/RingsContainer';


const Rings = () => (
  <PageWrapper>
    <Typography variant="display1" gutterBottom>
      Rings active shows
    </Typography>
    <RingsContainer />
  </PageWrapper>
);

export default Rings;
