import React from 'react';
import { Cell, Grid } from '@faceless-ui/css-grid';
import { HeroProps } from '..';
import { Gutter } from '../../Gutter';
import { Label } from '../../Label';
import RichText from '../../RichText';

export const LowImpactHero: React.FC<HeroProps> = ({ richText, media, title }) => {
  return (
    <Gutter>
      <Grid>
        <Cell cols={8}>
          <Label>{title}</Label>
          <RichText content={richText} />
        </Cell>
      </Grid>
    </Gutter>
  )
}