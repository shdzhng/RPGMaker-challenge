import React, { useState, useRef, useContext } from 'react';
import {
  FormContainer,
  FormsContainer,
  InputContainer,
  SubmitButton,
  ConfirmButton,
  ClassButton,
  HelperText,
} from './component.styles';
import { useRouter } from 'next/router';
import { UserContext } from '../pages/_app.jsx';

const CLASS_OPTIONS = ['Warrior', 'Wizard', 'Rogue'];
const DEFAULT_ERROR_STATE = {
  name: null,
  birthday: null,
};

const Form = () => {
  const router = useRouter();

  const nameRef = useRef();
  const classRef = useRef();
  const birthdayRef = useRef();

  const [data, setData] = useContext(UserContext);
  const [error, setError] = useState(DEFAULT_ERROR_STATE);
  const resetErrors = () => setError(DEFAULT_ERROR_STATE);

  return (
    <FormsContainer
      onSubmit={(e) => {
        e.preventDefault();
        router.push(`/result`);
      }}
    >
      {data.name === null && <h1>Welcome to the RPG Character Maker!</h1>}
      <FormContainer>
        <p>Let&apos;s start off with your Character&apos;s name</p>
        <InputContainer>
          <input
            ref={nameRef}
            type="text"
            placeholder="enter character name"
            disabled={data.name ? true : false}
            required
          />
          <ConfirmButton
            disabled={data.name ? true : false}
            onClick={(e) => {
              e.preventDefault();
              if (
                nameRef.current.value === null ||
                nameRef.current.value === ''
              ) {
                setError((prev) => {
                  return { ...prev, name: 'Name cannot be empty' };
                });
              } else {
                resetErrors();
                setData((prev) => {
                  return { ...prev, name: nameRef.current.value };
                });
              }
            }}
          >
            confirm
          </ConfirmButton>
        </InputContainer>
        {error.name && <HelperText>{error.name}</HelperText>}
      </FormContainer>
      {data.name !== null && (
        <FormContainer ref={classRef}>
          <fieldset>
            <legend>
              <p>
                Hello <span>{data.name}</span>, please select the class you
                would like to play
              </p>
            </legend>

            <InputContainer>
              {CLASS_OPTIONS.map((option, i) => (
                <ClassButton
                  key={option}
                  selected={option === data.class}
                  disabled={data.class ? true : false}
                  name="classSelect"
                  value={option}
                  onClick={({ target }) => {
                    setData((prev) => {
                      return { ...prev, class: target.value };
                    });
                  }}
                >
                  {option}
                </ClassButton>
              ))}
            </InputContainer>
          </fieldset>
        </FormContainer>
      )}
      {data.class !== null && (
        <FormContainer>
          <p>
            A fine choice. You will be a fantastic <span>{data.class}</span>!
            Finally, when were you born?
          </p>
          <InputContainer>
            <input
              type="date"
              ref={birthdayRef}
              disabled={data.birthday ? true : false}
              required
            />
            <ConfirmButton
              disabled={data.birthday ? true : false}
              onClick={(e) => {
                e.preventDefault();
                if (birthdayRef.current.value === '') {
                  setError((prev) => {
                    return { ...prev, birthday: 'Date cannot be blank' };
                  });
                } else {
                  resetErrors();
                  setData((prev) => {
                    return { ...prev, birthday: birthdayRef.current.value };
                  });
                }
              }}
            >
              confirm
            </ConfirmButton>
          </InputContainer>
          {error.birthday && <HelperText>{error.birthday}</HelperText>}
        </FormContainer>
      )}
      <FormContainer>
        {data.birthday !== null && <SubmitButton type="submit" />}
      </FormContainer>
    </FormsContainer>
  );
};

export default Form;
