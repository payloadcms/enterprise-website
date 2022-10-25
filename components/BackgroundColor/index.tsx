import React from 'react';
import { VerticalPadding, VerticalPaddingOptions } from '../VerticalPadding';
import classes from './index.module.scss';

type Props = {
  color?: 'white' | 'black'
  paddingTop?: VerticalPaddingOptions
  paddingBottom?: VerticalPaddingOptions
  className?: string
  children?: React.ReactNode
  id?: string
}

export const BackgroundColor: React.FC<Props> = (props) => {
  const {
    id,
    className,
    children,
    paddingTop,
    paddingBottom,
    color = 'white',
  } = props;

  return (
    <div
      id={id}
      className={[
        classes[color],
        className,
      ].filter(Boolean).join(' ')}
    >
      <VerticalPadding
        top={paddingTop}
        bottom={paddingBottom}
      >
        {children}
      </VerticalPadding>
    </div>
  );
}
