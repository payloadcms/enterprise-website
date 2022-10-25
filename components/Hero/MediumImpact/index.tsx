import React from 'react';
import { HeroProps } from '..';

import classes from './index.module.scss';

export const MediumImpactHero: React.FC<HeroProps> = ({ richText, media }) => {
  return (
    <div className={classes.hero}>
      medium impact
    </div>
  )
}