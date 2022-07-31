import React from 'react';
import * as S from './Footer.style';
import logoFooter from '../img/logo-footer.svg';

function Footer() {
  return (
    <S.Footer>
      <S.Link as="a" href="https://martin-developer.netlify.app/" target="_blank" rel="noreferrer">
        Portfolio
      </S.Link>
      <S.Link to="/" aria-label="logo-footer.svg">
        <S.Img src={logoFooter} />
      </S.Link>
      <S.Link to="/terms">
        Terms & Privacy
      </S.Link>
    </S.Footer>
  );
}

export default Footer;
