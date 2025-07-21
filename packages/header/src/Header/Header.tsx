import { SearchBar } from '@mikey-d333/ui-library';
import * as S from "./Header.styles";

export interface HeaderProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  hints?: string[];
}



export const Header = ({
  searchTerm,
  setSearchTerm,
  hints = [],
}: HeaderProps) => {
  return (
    <S.HeaderWrapper>
      <S.HeaderTop>
        <S.Title>AU Business Finder</S.Title>
        <S.Subtitle>Australian Companies Register</S.Subtitle>
        <S.Menu>
          <S.MenuItem>
            <S.LinkItem href="/about">About</S.LinkItem>
          </S.MenuItem>
          <S.MenuItem>
            <S.LinkItem href="/contact">Contact</S.LinkItem>
          </S.MenuItem>
        </S.Menu>
      </S.HeaderTop>
      <S.SearchSection>
        <SearchBar
          value={searchTerm}
          onChange={setSearchTerm}
          placeholder="Search company name, ABN, industry, location..."
        />
        {hints && <S.HintBox>
          {hints.map((hint) => {
            return (
              <S.HintPill key={hint} onClick={() => setSearchTerm(hint)}>
                {hint}
              </S.HintPill>
            );
          })}
        </S.HintBox>}
      </S.SearchSection>
    </S.HeaderWrapper>
  );
};

export default Header;
