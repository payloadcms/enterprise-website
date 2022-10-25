import React from 'react';
import { MainMenu } from '../../payload-types';
import { Gutter } from '../Gutter';
import { Logo } from '../Logo';
import classes from './index.module.scss';

export const Header: React.FC<{ mainMenu: MainMenu }> = ({ mainMenu }) => {
  return (
    <header className={classes.header}>
      <Gutter>
        <Logo />
      </Gutter>
    </header>
  )
}