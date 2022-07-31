import styled from 'styled-components';

export const Section = styled.section`
  height: 100%;
  margin: 0 163px 0 163px;
  font-family: ${(props) => props.theme.font.family.default};
  line-height: ${(props) => props.theme.font.lineHeight.default};
  color: ${(props) => props.theme.color.text};
  text-align: center;
`;

export const H1 = styled.h1`
  font-size: 2.375rem;
  margin-top: 0.5em;
  margin-bottom: 0;
`;

export const Subtitle = styled.p`
  margin-top: 0.4em;
  margin-bottom: 2.6em;
`;

export const SubredditTitle = styled.p`
  font-weight: 500;
  margin-top: 2.7em;
`;

export const TableImage = styled.img`
  width: 100%;
  margin-top: 1em;
  margin-bottom: 1.5em;
`;
