import React from 'react';
import { Page } from '../../../payload-types';

import classes from './index.module.scss';

export const HighImpactHero: React.FC<Page['hero']> = ({ richText, media }) => {
  return (
    <div className={classes.hero}>
      high impact
    </div>
  )
}