import React from 'react';
import { Page } from '../../../payload-types';

import classes from './index.module.scss';

type Hero = Page['hero'];

export const LowImpactHero: React.FC<Hero> = ({ richText, media }) => {
  return (
    <div className={classes.hero}>
      low impact
    </div>
  )
}