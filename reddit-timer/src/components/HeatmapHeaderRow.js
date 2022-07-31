import React from 'react';
import * as S from './HeatmapHeaderRow.style';

const hours = [
  '12:00am',
  '2:00am',
  '4:00am',
  '6:00am',
  '8:00am',
  '10:00am',
  '12:00pm',
  '2:00pm',
  '4:00pm',
  '6:00pm',
  '8:00pm',
  '10:00pm',
];

function HeatmapHeaderRow() {
  return (
    <S.TitlesRow>
      <tr>
        <S.ColTitles> </S.ColTitles>
        {hours.map((hour) => (
          <S.ColTitles
            colSpan="2"
            key={hour}
          >
            {hour}
          </S.ColTitles>
        ))}
      </tr>
    </S.TitlesRow>
  );
}

export default HeatmapHeaderRow;
