import React from 'react';
import { HeroProps } from '..';

import classes from './index.module.scss';

export const LowImpactHero: React.FC<HeroProps> = ({ richText, media, title }) => {
  return (
    <div className={classes.hero}>
      low impact
    </div>
  )
}