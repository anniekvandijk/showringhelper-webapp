import React from 'react';
import Typography from '@material-ui/core/Typography';
import PageWrapper from '../main/PageWrapper';

const About = () => (
  <PageWrapper>
    <Typography variant="display1" gutterBottom>
        About
    </Typography>
    <span>
      Here there can be some text about the application.
    </span>
  </PageWrapper>
);

export default About;
