import React from 'react';
import PropTypes from 'prop-types';
import * as S from './PostsTableRow.style';

function PostsTableRow({
  title,
  permalink,
  timePosted,
  score,
  commments,
  author,
}) {
  const titleWithLengthControlled = (
    title.length > 42
      ? `${title.substring(0, 42)}...`
      : title
  );

  const authorWithLengthControlled = (
    author.length > 10
      ? `${author.substring(0, 10)}...`
      : author
  );

  const authorNameInTable = (
    authorWithLengthControlled === '[deleted]'
      ? author
      : <S.A href={`https://reddit.com/u/${author}`} target="_blank" rel="noopener noreferrer">{authorWithLengthControlled}</S.A>
  );

  return (
    <tr>
      <S.Td><S.A href={permalink} target="_blank" rel="noopener noreferrer">{titleWithLengthControlled}</S.A></S.Td>
      <S.Td>{timePosted}</S.Td>
      <S.Td>{score}</S.Td>
      <S.Td>{commments}</S.Td>
      <S.Td>{authorNameInTable}</S.Td>
    </tr>
  );
}

PostsTableRow.propTypes = {
  title: PropTypes.string,
  permalink: PropTypes.string,
  timePosted: PropTypes.string,
  score: PropTypes.number,
  commments: PropTypes.number,
  author: PropTypes.string,
};

PostsTableRow.defaultProps = {
  title: '',
  permalink: '',
  timePosted: '',
  score: null,
  commments: null,
  author: '',
};

export default PostsTableRow;
