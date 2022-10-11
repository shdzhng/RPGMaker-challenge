import React, { useState, useRef, useContext } from 'react';
import { Main, FormsContainer } from '../components/component.styles';
import { UserContext } from './_app';
import Head from 'next/head';
import Image from 'next/image';

const Result = () => {
  const [data] = useContext(UserContext);

  if (data.class === null) data.class = 'druid';

  return (
    <Main>
      <FormsContainer>
        <Head>
          <title>My Character @ RPG Maker</title>
          <meta name="" content="" />
        </Head>

        <p>
          {data.name
            ? `Greetings ${data.name}, born on ${data.birthday}. You will be a legendary ${data.class}!`
            : `Greetings Unnamed One. Unimpressed by the pre-destinated class options infront of you, you sought the power of Time. While traveling across Time, you witnessed the collapse of civilization at the tailend of the Anthropocene. Burdened by what you've seen, you chose to be re-born with a natural affinity for the wild and will join a circle of druid activists to combat climate change. You will be a legendary ${data.class}!`}
        </p>

        <div
          id="result-image-container"
          style={{ width: '100%', height: '600px', position: 'relative' }}
        >
          <Image
            layout="fill"
            objectFit="contain"
            src={`/${data.class.toLowerCase()}.png`}
            alt={data.class}
          />
        </div>
      </FormsContainer>
    </Main>
  );
};

export default Result;
