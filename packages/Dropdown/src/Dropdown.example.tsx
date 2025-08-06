import React from 'react';
import { Dropdown } from './Dropdown';
import { Button } from '../Button';

export const DropdownExample = () => {
  const menuItems = [
    { label: 'Profile', onClick: () => alert('Profile clicked') },
    { label: 'Settings', onClick: () => alert('Settings clicked') },
    { label: 'Logout', onClick: () => alert('Logout clicked') },
  ];

  return (
    <Dropdown trigger={<Button>My Account</Button>} menuItems={menuItems} />
  );
};
