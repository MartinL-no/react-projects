import React from 'react';
import PropTypes from 'prop-types';
import * as S from './HeatmapRow.style';

const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

function HeatmapRow({
  day,
  postsPerHour,
  activeHour,
  setActiveDayAndHour,
}) {
  return (
    <tr>
      <S.RowTitle>{weekdays[day]}</S.RowTitle>
      {postsPerHour.map((posts, hour) => (
        <S.DataCell
        // eslint-disable-next-line react/no-array-index-key
          key={hour}
          numPosts={posts.length}
          activeHour={activeHour === hour}
          onClick={() => setActiveDayAndHour({ day, hour, numPost: posts.length })}
        >
          {posts.length}
        </S.DataCell>
      ))}
    </tr>
  );
}

HeatmapRow.propTypes = {
  day: PropTypes.number.isRequired,
  postsPerHour: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.string,
    authorId: PropTypes.string,
    createdAt: PropTypes.instanceOf(Date),
    numComments: PropTypes.number,
    score: PropTypes.number,
    title: PropTypes.string,
    url: PropTypes.string,
  }))).isRequired,
  activeHour: PropTypes.number,
  setActiveDayAndHour: PropTypes.func.isRequired,
};

HeatmapRow.defaultProps = {
  activeHour: null,
};
export default React.memo(HeatmapRow);
