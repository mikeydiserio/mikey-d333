import React, { useState, useRef, useEffect } from 'react';
import * as S from './Dropdown.styles';

export interface MenuItem {
  label: string;
  onClick: () => void;
}

export interface DropdownProps {
  trigger: React.ReactElement;
  menuItems: MenuItem[];
}

export const Dropdown: React.FC<DropdownProps> = ({ trigger, menuItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [focusedIndex, setFocusedIndex] = useState(-1);

  const handleTriggerClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (isOpen) {
      switch (event.key) {
        case 'ArrowDown':
          setFocusedIndex((prevIndex) => (prevIndex + 1) % menuItems.length);
          break;
        case 'ArrowUp':
          setFocusedIndex((prevIndex) => (prevIndex - 1 + menuItems.length) % menuItems.length);
          break;
        case 'Enter':
          if (focusedIndex !== -1) {
            menuItems[focusedIndex].onClick();
            setIsOpen(false);
          }
          break;
        case 'Escape':
          setIsOpen(false);
          break;
        default:
          break;
      }
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <S.DropdownWrapper ref={dropdownRef} onKeyDown={handleKeyDown}>
      {trigger}
      {isOpen && (
        <S.DropdownMenu role="menu">
          {menuItems.map((item, index) => (
            <S.DropdownItem
              key={item.label}
              role="menuitem"
              tabIndex={-1}
              ref={(el) => {
                if (index === focusedIndex) {
                  el?.focus();
                }
              }}
              onClick={() => {
                item.onClick();
                setIsOpen(false);
              }}
            >
              {item.label}
            </S.DropdownItem>
          ))}
        </S.DropdownMenu>
      )}
    </S.DropdownWrapper>
  );
};