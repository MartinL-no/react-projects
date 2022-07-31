import React from 'react';
import * as S from './SearchPage.style';
import Form from '../components/Form';
import HeatmapSection from '../components/HeatmapSection';

function SearchPage() {
  return (
    <S.Container>
      <S.H1>Find the best time for a subreddit</S.H1>
      <Form />
      <HeatmapSection />
    </S.Container>
  );
}

export default SearchPage;
