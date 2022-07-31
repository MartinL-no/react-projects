import React from 'react';
import PropTypes from 'prop-types';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';

function Homepage({ defaultSubreddit }) {
  return (
    <>
      <HeroSection defaultSubreddit={defaultSubreddit} />
      <InfoSection />
    </>
  );
}

Homepage.propTypes = {
  defaultSubreddit: PropTypes.string,
};

Homepage.defaultProps = {
  defaultSubreddit: '',
};

export default Homepage;
