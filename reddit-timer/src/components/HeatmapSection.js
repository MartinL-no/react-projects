import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetchPosts from './useFetchPosts';
import Heatmap from './Heatmap';
import PostsTable from './PostsTable';
import * as S from './HeatmapSection.style';

function HeatmapSection() {
  const { subredditParameter } = useParams();
  const [activeCell, setActiveCell] = useState({ day: null, hour: null, numPosts: null });

  const {
    isLoading,
    hasError,
    ungroupedPosts,
    postsPerDay,
  } = useFetchPosts(subredditParameter);

  useEffect(() => {
    setActiveCell({ day: null, hour: null, numPosts: null });
  }, [subredditParameter]);

  const setActiveDayAndHour = (dayAndHourOfCell) => {
    setActiveCell(dayAndHourOfCell);
  };

  if (isLoading) {
    return (
      <S.Spinner />
    );
  }
  if (hasError) {
    return (
      <S.Error>Something went wrong. Please check the subreddit you entered and try again.</S.Error>
    );
  }

  const { day, hour } = activeCell;
  const selectedPosts = postsPerDay[day] && postsPerDay[day][hour];
  const showPostsTable = selectedPosts && selectedPosts.length > 0;

  return (
    <S.HeatmapContainer>
      <Heatmap
        postsPerDay={postsPerDay}
        activeCell={activeCell}
        setActiveDayAndHour={setActiveDayAndHour}
      />
      {
      showPostsTable && (
        <PostsTable
          ungroupedPosts={ungroupedPosts}
          activeCell={activeCell}
          posts={selectedPosts}
        />
      )
    }
    </S.HeatmapContainer>

  );
}

export default HeatmapSection;
