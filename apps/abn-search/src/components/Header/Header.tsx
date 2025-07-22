'use client'
import * as S from './Header.styles'
export const Header =  ()  => {
  return (
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
  )
}

export default Header
