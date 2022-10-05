import React, { useState, useRef, useContext } from 'react';
import { Main } from '../components/component.styles';
import { UserContext } from './_app';
import Head from 'next/head';
import wizardPhoto from '../assets/wizard.png';
import roguePhoto from '../assets/rogue.png';
import warriorPhoto from '../assets/warrior.png';
import Image from 'next/image';

const character = () => {
  const [data, setData] = useContext(UserContext);

  return (
    <Main>
      <Head>
        <title>My Character @ RPG Maker</title>
        <meta name="" content=""></meta>
      </Head>
      <p>{`Greetings ${data.name ? data.name : 'Unnamed One'}, born on ${
        data.birthday ? data.birthday : 'the darkest night of the century'
      }. You will be a legendary ${
        data.class ? data.class : 'Bringer of Doom'
      }!`}</p>

      {/* <Image layout="fill" src={`${data.class}Photo`} alt={data.class} /> */}
    </Main>
  );
};

export default character;
