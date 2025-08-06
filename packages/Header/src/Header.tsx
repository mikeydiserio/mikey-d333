'use client';

import { Search } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import {
  AppTitle,
  HeaderContainer,
  LeftSection,
  RightSection,
  SearchInput,
  SearchResultItem,
  SearchResults,
  SearchWrapper
} from './Header.styles';

export const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [isScrolled, setIsScrolled] = useState(false);

  // When youre ready to implement
  // const handleLogout = async () => {};

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query.length > 2) {
      // Replace with actual search logic
      setSearchResults(['Result 1', 'Result 2', 'Result 3']);
    } else {
      setSearchResults([]);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <HeaderContainer isScrolled={isScrolled}>
      <LeftSection>
        <AppTitle>Mikey D333 Header</AppTitle>
        {/* {user && (
          <UserInfo>
            Hello, {user.email || 'User'}
          </UserInfo>
        )} */}
      </LeftSection>
      <SearchWrapper>
        <Search />
        <SearchInput
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearch}
        />
        {searchResults.length > 0 && (
          <SearchResults>
            {searchResults.map((result) => (
              <SearchResultItem key={result}>{result}</SearchResultItem>
            ))}
          </SearchResults>
        )}
      </SearchWrapper>
      <RightSection>
        {/* <ThemeToggleButton onClick={toggleTheme}>
          {theme === 'light' ? <Moon /> : <Sun />}
        </ThemeToggleButton> */}
        {/* <LogoutButton onClick={handleLogout}>Logout</LogoutButton> */}
      </RightSection>
    </HeaderContainer>
  );
};
