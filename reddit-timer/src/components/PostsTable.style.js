import styled from 'styled-components';

export const Table = styled.table`
  max-width: 785px;
  width: 100%;
  margin: 0 auto;
  border: solid 1px #DDDDDD;
  border-collapse: collapse;
  font-family: ${(props) => props.theme.font.family.default};
  font-size: 14px;
  font-weight: 500;
  text-align: left;
  color: ${(props) => props.theme.color.dark};
`;

export const Caption = styled.caption`
  font-family: ${(props) => props.theme.font.family.headline};
  font-size: 24px;
  font-weight: 400;
  text-align: left;
  color: ${(props) => props.theme.color.dark};
  margin-bottom: 0.2em;
`;

export const Th = styled.th`
  border: solid 1px #DDDDDD;
  padding: ${(props) => props.theme.postsTableCells.padding};
  &:first-of-type {
    width: 47.5%;
  }
  &:last-of-type {
    width: 16.4%;
  }
  `;
