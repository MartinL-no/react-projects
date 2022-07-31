import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as S from './Form.style';

import Button from './Button';

function Form() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const { subredditParameter } = useParams();
  const [subreddit, setSubreddit] = useState(subredditParameter);

  useEffect(() => {
    setSubreddit(subredditParameter);
  }, [subredditParameter]);

  const handleChange = (event) => {
    setSubreddit(event.target.value);
  };

  const onSubmit = () => {
    navigate(`/search/${subreddit}`);
  };

  return (
    <>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.Label htmlFor="input">r/</S.Label>
        <S.Input
          type="text"
          name="subreddit"
          value={subreddit}
          onChange={handleChange}
          /* eslint-disable react/jsx-props-no-spreading */
          {...register('subreddit', {
            required: true,
            onChange: (e) => handleChange(e),
          })}
        />
        <Button type="submit">SEARCH</Button>
      </S.Form>
    </>
  );
}

export default Form;
