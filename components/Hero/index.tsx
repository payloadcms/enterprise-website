import React from 'react';
import { Page } from '../../payload-types';
import { HighImpactHero } from './HighImpact';
import { MediumImpactHero } from './MediumImpact';
import { LowImpactHero } from './LowImpact';

const heroes = {
  highImpact: HighImpactHero,
  mediumImpact: MediumImpactHero,
  lowImpact: LowImpactHero,
}

export type HeroProps = {
  title: Page['title']
} & Page['hero']
export const Hero: React.FC<HeroProps> = (props) => {
  const { type } = props;
  const HeroToRender = heroes[type];
  return <HeroToRender {...props} />
}