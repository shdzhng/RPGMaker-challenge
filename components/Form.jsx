import React, { useState, useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { flexCol } from '../styles/templates';

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
        <input ref={nameRef} />
        <button
          onClick={(e) => {
            e.preventDefault();
            console.log();
            setData((prev) => {
              return { ...prev, name: nameRef.current.value };
            });
          }}
        >
          confirm
        </button>
      </FormContainer>

      {data.name !== null && (
        <FormContainer ref={classRef}>
          <fieldset>
            <legend>
              Hello _____! Please select the class you would like to play.
            </legend>
            {CLASS_OPTIONS.map((option, i) => (
              <div key={option}>
                <input
                  name="classSelect"
                  type="radio"
                  id={option}
                  value={option}
                  onChange={({ target }) =>
                    setData((prev) => {
                      return { ...prev, class: target.value };
                    })
                  }
                />
                <label htmlFor={option}>{option}</label>
              </div>
            ))}
          </fieldset>
        </FormContainer>
      )}

      {data.class !== null && (
        <FormContainer>
          <p>
            A fine choice. You will be a fantastic _____! Finally, when were you
            born?
          </p>
          <input type="date" ref={birthdayRef} />
          <button
            onClick={(e) => {
              e.preventDefault();
              setData((prev) => {
                return { ...prev, birthday: birthdayRef.current.value };
              });
            }}
          >
            confirm
          </button>
        </FormContainer>
      )}

      {data.birthday !== null && <button type="submit">submit</button>}
    </FormsContainer>
  );
};

const FormContainer = styled.div`
  margin: 50px auto;
  background-color: red;
`;

const FormsContainer = styled.form`
  width: 90%;
  height: 90%;
  ${flexCol}
  background-color:green;
`;

export default Form;
