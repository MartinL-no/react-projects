import styled from 'styled-components';

export const Td = styled.td`
  font-weight: 400;
  border: solid 1px #DDDDDD;
  padding: ${(props) => props.theme.postsTableCells.padding};
`;

export const A = styled.a`
  color: #0087FF;
  `;

export default Td;
