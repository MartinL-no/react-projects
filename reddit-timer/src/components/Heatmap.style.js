import styled from 'styled-components';

export const Table = styled.table`
  width: 1114px;
  table-layout: fixed;
  margin: 0 auto;
  border-collapse: collapse;
  text-align: center;
`;

export const Caption = styled.p`
  margin-top: 0.75em;
  font-weight: 700;
  font-size: 0.875rem;
  color: ${(props) => props.theme.color.text};
  margin-bottom: 1.5em;
`;
