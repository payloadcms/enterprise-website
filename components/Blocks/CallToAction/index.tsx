import { Cell, Grid } from '@faceless-ui/css-grid';
import React from 'react';
import { Page } from '../../../payload-types';
import { Gutter } from '../../Gutter';
import { CMSLink } from '../../Link';
import RichText from '../../RichText';
import { VerticalPadding } from '../../VerticalPadding';

import classes from './index.module.scss';

type Props = {
  ctaBackgroundColor?: 'white' | 'black';
  richText: {
    [k: string]: unknown;
  }[];
  links: {
    link: {
      type?: 'reference' | 'custom';
      newTab?: boolean;
      reference: {
        value: string | Page;
        relationTo: 'pages';
      };
      url: string;
      label: string;
    };
    id?: string;
  }[];
  id?: string;
  blockName?: string;
  blockType: 'cta';
}
export const CallToActionBlock: React.FC<Props> = ({ ctaBackgroundColor, links, richText }) => {
  return (
    <Gutter>
      <div
        className={[
          classes.callToAction,
          classes[`background--${ctaBackgroundColor}`],
        ].filter(Boolean).join(' ')}
      >
        <VerticalPadding>
          <Grid>
            <Cell cols={8} colsS={4}>
              <div>
                <RichText content={richText} />
              </div>
            </Cell>

            <Cell start={10} cols={3}>
              <div className={classes.linkGroup}>
                {(links || []).map(({ link }, i) => {
                  return (
                    <CMSLink
                      key={i}
                      {...link}
                    />
                  )
                })}
              </div>
            </Cell>
          </Grid>
        </VerticalPadding>
      </div>
    </Gutter>
  )
}