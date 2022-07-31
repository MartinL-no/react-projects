import styled from 'styled-components';

export const RowTitle = styled.td`
  width: 154px;
  height: 40px;
  font-size: 15px;
  font-weight: 600;
  color: ${(props) => props.theme.color.light};
  background-color: #1E2537;
`;

/* eslint-disable no-nested-ternary */
/* eslint-disable indent */
export const DataCell = styled.td`
  font-size: 14px;
  font-weight: 700;
  color: ${(props) => props.theme.color.light};
  background-color: ${(props) => (
    props.numPosts > 9
    ? '#3984a3'
    : props.numPosts > 8
    ? '#5aad8c'
    : props.numPosts > 7
    ? '#5cb391'
    : props.numPosts > 6
    ? '#5db492'
    : props.numPosts > 5
    ? '#5eb391'
    : props.numPosts > 4
    ? '#8cc894'
    : props.numPosts > 3
    ? '#99cd94'
    : props.numPosts > 2
    ? '#a0ce93'
    : props.numPosts > 1
    ? '#a9d194'
    : props.numPosts > 0
    ? '#aed396'
    : '#e0e592'
    )};
  /* eslint-enable no-nested-ternary */
  /* eslint-enable indent */
  outline: ${(props) => (
    props.activeHour
    ? 'solid 1px black'
    : 'none'
  )};
  &:hover, :focus {
    background-color: #A0CE93;
    outline: solid 1px ${(props) => props.theme.color.dark};
    cursor: pointer;
  }
`;
