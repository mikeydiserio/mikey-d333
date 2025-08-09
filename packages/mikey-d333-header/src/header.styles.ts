import styled from 'styled-components'

export const HeaderContainer = styled.header<{
  isScrolled: boolean
}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ isScrolled }) => (isScrolled ? '10px 30px' : '20px 30px')};
  background-color: ${props => props.theme.colors.cardBackground};
  border-bottom: 1px solid ${props => props.theme.colors.cardBorder};
  box-shadow: ${props => props.theme.shadows.default};
  color: ${props => props.theme.colors.text};
  position: sticky;
  top: 0;
  z-index: 500;
  transition: padding 0.3s ease-in-out;
`

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

export const AppTitle = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: ${props => props.theme.colors.primary};
`

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  font-weight: 500;
  color: ${props => props.theme.colors.text};

  @media (max-width: 768px) {
    display: none; /* Hide user info on smaller screens */
  }
`

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`

export const ThemeToggleButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${props => props.theme.colors.iconColor};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 50%;
  transition:
    color 0.2s ease,
    background-color 0.2s ease;

  &:hover {
    color: ${props => props.theme.colors.iconHoverColor};
    background-color: ${props => props.theme.colors.sidebarHoverBg};
  }

  svg {
    width: 24px;
    height: 24px;
  }
`

export const LogoutButton = styled.button`
  background-color: transparent;
  border: 1px solid ${props => props.theme.colors.logoutButton};
  color: ${props => props.theme.colors.logoutButton};
  padding: 8px 15px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    color 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    background-color: ${props => props.theme.colors.danger};
    color: white;
    border-color: ${props => props.theme.colors.danger};
  }
`

export const SearchWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 300px;

  svg {
    position: absolute;
    left: 10px;
    color: ${({ theme }) => theme.colors.gray[400]};
  }
`

export const SearchInput = styled.input`
  width: 100%;
  padding: 8px 12px 8px 35px;
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.gray[100]};
`

export const SearchResults = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  border-radius: 8px;
  margin-top: 4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;
`

export const SearchResultItem = styled.div`
  padding: 12px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[100]};
  }
`
