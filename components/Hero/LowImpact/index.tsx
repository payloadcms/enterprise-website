import React from 'react';
import { HeroProps } from '..';
import { Gutter } from '../../Gutter';
import { Label } from '../../Label';
import RichText from '../../RichText';

import classes from './index.module.scss';

export const LowImpactHero: React.FC<HeroProps> = ({ richText, media, title }) => {
  return (
    <Gutter>
      <Label>{title}</Label>
      <RichText content={richText} />
    </Gutter>
  )
}