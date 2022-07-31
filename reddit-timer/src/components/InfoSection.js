import React from 'react';
import * as S from './InfoSection.style';

function InfoSection() {
  return (
    <S.Section>
      <S.Article>
        <S.H2 id="how-it-works">How it works</S.H2>
        <S.Ul>
          <li>We find the 500 top posts from the past year for a subreddit.</li>
          <li>The data is visualized in a heatmap grouped by weekday and hour of the day.</li>
          <li>See immediately when to submit your reddit post.</li>
        </S.Ul>
      </S.Article>
      <S.Article>
        <S.H2 id="about">About</S.H2>
        <S.P>
          This app was created as part of a course where I had to implement a pixel-perfect
          real-world application with professional workflows and tools like Kanban, Asana,
          Zeplin, GitHub, pull requests and code reviews.
        </S.P>
        <S.P>
          Some of the technologies I used were
          <S.SectionA href="https://reactjs.org/" target="_blank" rel="noreferrer"> react</S.SectionA>
          ,
          <S.SectionA href="https://reactrouter.com/" target="_blank" rel="noreferrer"> react-router</S.SectionA>
          ,
          <S.SectionA href="https://styled-components.com/" target="_blank" rel="noreferrer"> styled-components</S.SectionA>
          ,
          <S.SectionA href="https://react-hook-form.com/" target="_blank" rel="noreferrer"> react-hook-form</S.SectionA>
          ,
          <S.SectionA href="https://jestjs.io/" target="_blank" rel="noreferrer"> jest </S.SectionA>
          and
          <S.SectionA href="https://testing-library.com/" target="_blank" rel="noreferrer"> testing-library</S.SectionA>
          .
        </S.P>
        <S.P>
          You can see the source code
          <S.SectionA href="https://github.com/martinlrmr/react-projects" target="_blank" rel="noreferrer"> here</S.SectionA>
          .
        </S.P>
      </S.Article>
    </S.Section>
  );
}

export default InfoSection;
