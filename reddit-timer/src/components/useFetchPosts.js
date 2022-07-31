import { useEffect, useState } from 'react';

const NUM_POSTS_TO_FETCH = 500;
const MAX_NUM_POSTS_PER_PAGE = 100;

export async function fetchTopRedditPosts(subredditParameter, previousPosts = [], after = null) {
  let url = `https://www.reddit.com/r/${subredditParameter}/top.json?t=year&limit=${MAX_NUM_POSTS_PER_PAGE}`;
  if (after) {
    url += `&after=${after}`;
  }

  const response = await fetch(url);
  const { data } = await response.json();
  const allPosts = previousPosts.concat(data.children);
  const noMorePosts = data && data.dist < MAX_NUM_POSTS_PER_PAGE;
  const limitReached = allPosts.length >= NUM_POSTS_TO_FETCH;
  if (noMorePosts || limitReached) {
    return allPosts;
  }
  return fetchTopRedditPosts(subredditParameter, allPosts, data.after);
}

function groupPostsPerDayAndHour(posts) {
  const postsPerDay = Array(7)
    .fill()
    .map(() => Array(24).fill().map(() => []));

  posts.forEach((post) => {
    const createdAtDate = new Date(post.data.created_utc * 1000);
    const dayOfWeek = createdAtDate.getDay();
    const hour = createdAtDate.getHours();

    postsPerDay[dayOfWeek][hour].push({
      createdAt: createdAtDate,
      title: post.data.title,
      url: `https://reddit.com${post.data.permalink}`,
      score: post.data.score,
      numComments: post.data.num_comments,
      author: post.data.author,
      authorId: post.data.author_fullname,
    });
  });
  return postsPerDay;
}

function useFetchPosts(subredditParameter) {
  const [ungroupedPosts, setUngroupedPosts] = useState([]);
  const [postsPerDay, setPostsPerDay] = useState([]);
  const [status, setStatus] = useState('pending');

  useEffect(() => {
    setStatus('pending');

    fetchTopRedditPosts(subredditParameter)
      .then((posts) => {
        setUngroupedPosts(posts);
        return groupPostsPerDayAndHour(posts);
      })
      .then((newpostsPerDay) => {
        setPostsPerDay(newpostsPerDay);
        setStatus('resolved');
      })
      .catch(() => setStatus('rejected'));
  }, [subredditParameter]);
  return {
    isLoading: status === 'pending',
    hasError: status === 'rejected',
    ungroupedPosts,
    postsPerDay,
  };
}

export default useFetchPosts;
