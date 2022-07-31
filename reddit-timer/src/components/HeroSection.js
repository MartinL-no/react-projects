import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as S from './HeroSection.style';
import Button from './Button';
import table from '../img/table.png';

function HeroSection({ defaultSubreddit }) {
  return (
    <>
      <S.Section>
        <S.H1>No reactions to your reddit posts?</S.H1>
        <S.Subtitle>
          Great timing, great results! Find the best time to post on your subreddit.
        </S.Subtitle>
        <Link to={`/search/${defaultSubreddit}`}>
          <Button>SHOW ME THE BEST TIME</Button>
        </Link>
        <S.SubredditTitle>{`r${defaultSubreddit}`}</S.SubredditTitle>
        <Link to={`/search/${defaultSubreddit}`}>
          <S.TableImage src={table} alt="" />
        </Link>
      </S.Section>
    </>
  );
}

HeroSection.propTypes = {
  defaultSubreddit: PropTypes.string,
};

HeroSection.defaultProps = {
  defaultSubreddit: '',
};

export default HeroSection;
