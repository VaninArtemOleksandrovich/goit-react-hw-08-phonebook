import { Box } from 'components/Box';
import React from 'react';
import css from './Home.module.css';

export default function Home() {
  return (
    <Box>
      <p className={css.text}>
      Pray for Ukraine.
      </p>

      <p className={css.text}>
      Support the Ukrainian Army.
      </p>

      <a
        className={css.support}
        href="https://savelife.in.ua/en/donate-en/#donate-army-card-monthly"
        target="_blank"
        rel="noopener noreferrer"
      >
        support Ukraine
      </a>
    </Box>
  );
}
