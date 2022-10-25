import React from 'react';
import { HeroProps } from '..';

import classes from './index.module.scss';

export const HighImpactHero: React.FC<HeroProps> = ({ richText, media }) => {
  return (
    <div className={classes.hero}>
      high impact
    </div>
  )
}