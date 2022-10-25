import Link from 'next/link';
import React from 'react';
import { Chevron } from '../icons/Chevron';
import classes from './index.module.scss';

export type Props = {
  label: string
  appearance?: 'default' | 'primary' | 'secondary'
  el?: 'button' | 'link' | 'a'
  onClick?: () => void
  href?: string
  newTab?: boolean
}

const elements = {
  a: 'a',
  link: Link,
  button: 'button',
}

export const Button: React.FC<Props> = ({
  el = 'button',
  label,
  newTab,
  href,
  appearance,
}) => {
  const newTabProps = newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {};
  const Element = elements[el];

  const elementProps = {
    ...newTabProps,
    href,
  }

  const content = (
    <React.Fragment>
      <Chevron />
      {label}
    </React.Fragment>
  )

  return (
    <Element {...elementProps} className={classes[appearance]}>
      {el === 'link' && (
        <a {...newTabProps}>
          {content}
        </a>
      )}
      {el !== 'link' && (
        <React.Fragment>
          {content}
        </React.Fragment>
      )}
    </Element>
  )
}