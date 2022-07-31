import React from 'react';
import PropTypes from 'prop-types';
import * as S from './PostsTable.style';
import PostsTableRow from './PostsTableRow';

function PostsTable({ posts }) {
  const renderPostsTableRow = [...posts]
    .sort((a, b) => a.createdAt.getMinutes() - b.createdAt.getMinutes())
    .map((post) => (
      <PostsTableRow
        key={post.url}
        title={post.title}
        timePosted={post.createdAt.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }).toLowerCase()}
        score={post.score}
        commments={post.numComments}
        author={post.author}
        permalink={post.url}
      />
    ));

  return (
    <S.Table>
      <thead>
        <tr>
          <S.Th>Title</S.Th>
          <S.Th>Time Posted</S.Th>
          <S.Th>Score</S.Th>
          <S.Th>Comments</S.Th>
          <S.Th>Author</S.Th>
        </tr>
      </thead>
      <tbody>
        {renderPostsTableRow}
      </tbody>
      <S.Caption>Posts</S.Caption>
    </S.Table>
  );
}

PostsTable.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.string,
    authorId: PropTypes.string,
    createdAt: PropTypes.instanceOf(Date),
    numComments: PropTypes.number,
    score: PropTypes.number,
    title: PropTypes.string,
    url: PropTypes.string,
  })),
};

PostsTable.defaultProps = {
  posts: [],
};

export default PostsTable;
