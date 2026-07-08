import DefaultNavbarItemComponentTypes from '@theme-original/NavbarItem/ComponentTypes';
import AlphabetSwitcher from '@site/src/components/AlphabetSwitcher';

// Register a custom navbar item type usable from docusaurus.config.ts as
// { type: 'custom-alphabetSwitcher' }.
export default {
  ...DefaultNavbarItemComponentTypes,
  'custom-alphabetSwitcher': AlphabetSwitcher,
};
