import React from 'react';
import { Grid, Cell } from '@faceless-ui/css-grid'
import { Page } from '../../../payload-types';
import classes from './index.module.scss';
import RichText from '../../RichText';
import { Gutter } from '../../Gutter';
import { CMSLink } from '../../Link';

type Props = Extract<Page['layout'][0], { blockType: 'content' }>

const Columns: React.FC<Props> = ({
  layout,
  columnOne,
  columnTwo,
  columnThree,
}) => {
  switch (layout) {
    case 'oneColumn': {
      return (
        <Cell cols={9} colsM={4}>
          <RichText content={columnOne.richText} />
          {/* {columnOne.enableLink && (
            <CMSLink {...columnOne.link} />
          )} */}
        </Cell>
      )
    }

    case 'halfAndHalf': {
      return (
        <React.Fragment>
          <Cell cols={6} colsM={4}>
            <RichText content={columnTwo.richText} />
            {/* {columnTwo.enableLink && (
              <CMSLink {...columnTwo.link} />
            )} */}
          </Cell>
          <Cell cols={6} colsM={4}>
            <RichText content={columnTwo.richText} />
            {/* {columnTwo.enableLink && (
              <CMSLink {...columnTwo.link} />
            )} */}
          </Cell>
        </React.Fragment>
      )
    }
  }
}

export const ContentBlock: React.FC<Props> = (props) => {
  return (
    <Gutter className={classes.mediaBlock}>
      <Grid>
        <Columns {...props} />
      </Grid>
    </Gutter>
  )
}