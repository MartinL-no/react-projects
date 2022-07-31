import React from 'react';
import PropTypes from 'prop-types';
import ButtonStyled from './Button.style';

function Button({ children }) {
  return (
    <ButtonStyled>
      {children}
    </ButtonStyled>
  );
}

Button.propTypes = {
  children: PropTypes.node,
};

Button.defaultProps = {
  children: '',
};

export default Button;
