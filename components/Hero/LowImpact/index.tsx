import React from 'react';
import { Cell, Grid } from '@faceless-ui/css-grid';
import { Page } from '../../../payload-types';
import { Gutter } from '../../Gutter';
import RichText from '../../RichText';

export const LowImpactHero: React.FC<Page['hero']> = ({ richText }) => {
  return (
    <Gutter>
      <Grid>
        <Cell cols={8}>
          <RichText content={richText} />
        </Cell>
      </Grid>
    </Gutter>
  )
}