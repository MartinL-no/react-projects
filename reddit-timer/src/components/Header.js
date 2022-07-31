import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as S from './Header.style';
import logo from '../img/logo.svg';

function Header({ defaultSubreddit }) {
  return (
    <S.Header>
      <Link to="/" aria-label="logo-header">
        <S.Img src={logo} alt="" />
      </Link>
      <nav>
        <S.Ul>
          <li><S.Link to={`/search/${defaultSubreddit}`}>Search</S.Link></li>
          <li><S.HashLink to="/#how-it-works">How it works</S.HashLink></li>
          <li><S.HashLink to="/#about">About</S.HashLink></li>
        </S.Ul>
      </nav>
    </S.Header>
  );
}

Header.propTypes = {
  defaultSubreddit: PropTypes.string,
};

Header.defaultProps = {
  defaultSubreddit: '',
};

export default Header;
