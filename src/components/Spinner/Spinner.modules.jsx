import { ImSpinner } from 'react-icons/im';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled(ImSpinner)`
  display: block;
  height: 28px;
  width: 28px;
  color: tomato;
  margin-top: 8px;
  animation: ${spin} 1000ms ease infinite;
`;
