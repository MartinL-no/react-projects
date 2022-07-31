import styled from 'styled-components';

export const Form = styled.form`
  margin-bottom: 3.8em;
`;

export const Label = styled.label`
  font-family: ${(props) => props.theme.font.family.default};
  font-size: 18px;
  color: ${(props) => props.theme.color.midDark};
`;

export const Input = styled.input`
  font-family: ${(props) => props.theme.font.family.default};
  font-size: 14px;
  color: ${(props) => props.theme.color.dark};
  max-width: 26.428em;
  width: 100%;
  height: 2.57em;
  margin-right: 10px;
  margin-left: 10px;
  padding-left: 1.14em;
  // conditional styling for error/ no-input
  border: ${(props) => (props.errorStyling ? '1px solid #ff726f'
    : '1px solid #E6E6E6')};
  border-radius: 4px;
`;
