import Link from 'next/link';
import React from 'react';
import { MainMenu } from '../../payload-types';
import { Gutter } from '../Gutter';
import { CMSLink } from '../Link';
import { Logo } from '../Logo';
import classes from './index.module.scss';

export const Header: React.FC<{ mainMenu: MainMenu }> = ({ mainMenu }) => {
  return (
    <header className={classes.header}>
      <Gutter className={classes.wrap}>
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
        <nav className={classes.nav}>
          {(mainMenu.navItems || []).map(({ link }, i) => {
            return (
              <CMSLink key={i} {...link} />
            )
          })}
        </nav>
      </Gutter>
    </header>
  )
}