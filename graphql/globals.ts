import { LINK_FIELDS } from './link';

export const MAIN_MENU = `
  MainMenu {
    navItems {
      link ${LINK_FIELDS({ disableAppearance: true })}
		}
  }
`;
