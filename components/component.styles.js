import styled, { css } from 'styled-components';

export const flexCol = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Main = styled.main`
  background-color: ${({ theme }) => theme.background.primary};
  height: 95vh;
  width: 100vw;
  ${flexCol}
  justify-content: center;
`;

const inputContainerDefault = css`
  display: flex;
  width: 100%;
  justify-content: center;
  font-size: 1.25rem;
  gap: 1.5px;
  transition: all 200ms ease-in-out;
`;

export const FormContainer = styled.div`
  margin: 40px auto;
  ${flexCol}
  gap: 10px;
  animation: slide-in-blurred-bottom 0.65s cubic-bezier(0.23, 1, 0.32, 1) both;
  @keyframes slide-in-blurred-bottom {
    0% {
      transform: translateY(1000px) scaleY(2.5) scaleX(0.2);
      transform-origin: 50% 100%;
      filter: blur(40px);
      opacity: 0;
    }
    100% {
      transform: translateY(0) scaleY(1) scaleX(1);
      transform-origin: 50% 50%;
      filter: blur(0);
      opacity: 1;
    }
  }
`;

export const SubmitButton = styled.button`
  animation: bounce-in-top 0.65s cubic-bezier(0.23, 1, 0.32, 1) both;
  width: 200px;
  height: 200px;
  border-radius: 100%100%;
  border: none;
  background-color: ${({ theme }) => theme.accent};
  color: ${({ theme }) => theme.text.secondary};
  font-weight: 900;
  font-size: 1.5rem;
  transition: all 100ms ease-in;

  &:before {
    content: 'EMBARK ON ADVENTURE?';
  }

  &:hover {
    background-color: ${({ theme }) => theme.background.accent};
    width: 210px;
    height: 210px;
    &:before {
      content: 'LETS GO!';
    }
  }

  @-webkit-keyframes rotate-out-2-cw {
    0% {
      -webkit-transform: rotate(0);
      transform: rotate(0);
      opacity: 1;
    }
    100% {
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg);
      opacity: 0;
    }
  }

  @keyframes rotate-out-2-cw {
    0% {
      -webkit-transform: rotate(0);
      transform: rotate(0);
      opacity: 1;
    }
    100% {
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg);
      opacity: 0;
    }
  }

  @keyframes bounce-in-top {
    0% {
      transform: translateY(-500px);
      animation-timing-function: ease-in;
      opacity: 0;
    }
    38% {
      transform: translateY(0);
      animation-timing-function: ease-out;
      opacity: 1;
    }
    55% {
      transform: translateY(-65px);
      animation-timing-function: ease-in;
    }
    72% {
      transform: translateY(0);
      animation-timing-function: ease-out;
    }
    81% {
      transform: translateY(-28px);
      animation-timing-function: ease-in;
    }
    90% {
      transform: translateY(0);
      animation-timing-function: ease-out;
    }
    95% {
      transform: translateY(-8px);
      animation-timing-function: ease-in;
    }
    100% {
      transform: translateY(0);
      animation-timing-function: ease-out;
    }
  }
`;

export const FormsContainer = styled.form`
  width: 90%;
  height: 90%;
  ${flexCol}
  padding: 20px;
`;

///styled according to based on input type
export const InputContainer = styled.div`
  ${inputContainerDefault};
  height: 40px;
  border-radius: 10px;

  button,
  input {
    transition: inherit;
    font-size: inherit;
    color: ${({ theme }) => theme.text.secondary};
    height: 100%;
  }

  input {
    background-color: ${({ theme }) => theme.background.secondary};
    padding-left: 6px;
    border: none;
    outline: none;
    ::placeholder {
      color: ${({ theme }) => theme.text.secondary + '80'};
    }
    border-radius: 10px 0 0 10px;
  }

  /// if disabled
  input {
    &:disabled {
      color: ${({ theme }) => theme.text.secondary};
    }
  }

  ///text type styling
  :has(input[type='text']:active, input[type='text']:focus) {
    height: 60px;
  }

  ///radio type styling
  :has(input[type='radio']) {
    div {
      display: flex;
      padding: 0 1rem;
      justify-content: center;
      align-items: center;
      color: ${({ theme }) => theme.text.secondary};
      background-color: ${({ theme }) => theme.accent + '90'};
      transition: inherit;

      &:not(:has(:checked)):hover {
        background-color: ${({ theme }) => theme.accent};
      }

      &:first-child {
        border-radius: 2rem 0 0 2rem;
      }
      &:last-child {
        border-radius: 0 2rem 2rem 0;
      }
      :has(:checked) {
        background-color: ${({ theme }) => theme.background.secondary};
      }
      :has(:disabled) {
        color: ${({ theme }) => theme.text.secondary};
        background-color: ${({ theme }) => theme.disabled};
        :has(:checked) {
          background-color: ${({ theme }) => theme.background.secondary};
        }
      }
    }
  }

  input[type='radio'] {
    -webkit-appearance: none;
    appearance: none;
    height: 0;
  }

  button {
    background-color: ${({ theme }) => theme.accent + '95'};
    border: none;
    border-radius: 0 10px 10px 0px;
    &:hover {
      background-color: ${({ theme }) => theme.accent};
    }
    &:active {
      background-color: ${({ theme }) => theme.accent + '90'};
    }
    &:disabled {
      background-color: ${({ theme }) => theme.disabled};
    }
  }
`;
