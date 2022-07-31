import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Heatmap.style';

import HeatmapRow from './HeatmapRow';
import HeatmapHeaderRow from './HeatmapHeaderRow';

function Heatmap({ postsPerDay, setActiveDayAndHour, activeCell }) {
  return (
    <>
      <S.Table>
        <HeatmapHeaderRow />
        <tbody>
          {postsPerDay.map((postsPerHour, day) => (
            <HeatmapRow
              // eslint-disable-next-line react/no-array-index-key
              key={day}
              day={day}
              postsPerHour={postsPerHour}
              activeHour={activeCell.day === day ? activeCell.hour : null}
              setActiveDayAndHour={setActiveDayAndHour}
            />
          ))}
        </tbody>
      </S.Table>
      <S.Caption>
        All times are shown in your timezone:
        {` ${Intl.DateTimeFormat().resolvedOptions().timeZone}`}
      </S.Caption>
    </>
  );
}

Heatmap.propTypes = {
  postsPerDay: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.string,
    authorId: PropTypes.string,
    createdAt: PropTypes.instanceOf(Date),
    numComments: PropTypes.number,
    score: PropTypes.number,
    title: PropTypes.string,
    url: PropTypes.string,
  })))).isRequired,
  setActiveDayAndHour: PropTypes.func.isRequired,
  activeCell: PropTypes.shape({
    day: PropTypes.number,
    hour: PropTypes.number,
  }).isRequired,
};

export default Heatmap;
