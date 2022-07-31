import styled from 'styled-components';

export const TitlesRow = styled.thead`
  height: 52px;
  background: linear-gradient(180deg, #FEFEFE 0%, #E9E9E9 100%);
  font-weight: 500;
  font-size: 14px;
  color: #787878;
  margin-bottom: 0;
`;

export const ColTitles = styled.th`
  border-top: 1px solid #F3F3F3;
  &:first-of-type {
    width: 14.1%;
    background-color: ${(props) => props.theme.color.light};
    border: none;
    border-right: 1px solid #F3F3F3;
  }
  &:last-of-type {
    border-right: 1px solid #F3F3F3;
  }
`;
