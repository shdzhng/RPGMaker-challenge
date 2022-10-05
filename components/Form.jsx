import React, { useState, useRef } from 'react';
import {
  FormContainer,
  FormsContainer,
  InputContainer,
  SubmitButton,
} from './component.styles';

const CLASS_OPTIONS = ['Warrior', 'Wizard', 'Rogue'];

const Form = () => {
  const nameRef = useRef();
  const classRef = useRef();
  const birthdayRef = useRef();
  const [data, setData] = useState({
    name: null,
    class: null,
    birthday: null,
  });

  return (
    <FormsContainer
      onSubmit={(e) => {
        e.preventDefault();
        console.log({ data });
      }}
    >
      {data.name === null && <h1>Welcome to the RPG Character Maker!</h1>}
      <FormContainer>
        <p>Let's start off with your Character's name</p>
        <InputContainer>
          <input
            type="text"
            placeholder="enter character name"
            ref={nameRef}
            disabled={data.name ? true : false}
          />
          <button
            disabled={data.name ? true : false}
            onClick={(e) => {
              e.preventDefault();
              if (
                nameRef.current.value === null ||
                nameRef.current.value === ''
              ) {
                alert('name cannot be empty');
              } else {
                setData((prev) => {
                  return { ...prev, name: nameRef.current.value };
                });
              }
            }}
          >
            confirm
          </button>
        </InputContainer>
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
                <div key={option}>
                  <input
                    disabled={data.class ? true : false}
                    name="classSelect"
                    type="radio"
                    id={option}
                    value={option}
                    onChange={({ target }) => {
                      setData((prev) => {
                        return { ...prev, class: target.value };
                      });
                    }}
                  />
                  <label htmlFor={option}>{option}</label>
                </div>
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
            />
            <button
              disabled={data.birthday ? true : false}
              onClick={(e) => {
                e.preventDefault();
                if (birthdayRef.current.value === null) {
                  alert('not a valid date');
                } else {
                  setData((prev) => {
                    return { ...prev, birthday: birthdayRef.current.value };
                  });
                }
              }}
            >
              confirm
            </button>
          </InputContainer>
        </FormContainer>
      )}
      {data.birthday !== null && <SubmitButton type="submit"></SubmitButton>}
    </FormsContainer>
  );
};

export default Form;