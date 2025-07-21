import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Header from './Header'

const defaultProps = {
  searchTerm: '',
  handleSearchChange: () => { /* noop for test */ },
  setSearchTerm: () => { /* noop for test */ },
  handleSearchButton: () => { /* noop for test */ },
  onHintClick: () => { /* noop for test */ },
}

describe('Header Component', () => {
  test('should render without crashing', () => {
    render(<Header {...defaultProps} />)

    expect(screen.getByText('AU Business Finder')).toBeInTheDocument()
    expect(
      screen.getByText('Australian Companies Register'),
    ).toBeInTheDocument()
  })

  test('should render navigation menu', () => {
    render(<Header {...defaultProps} />)

    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })  

  test('should have proper semantic structure', () => {
    render(<Header {...defaultProps} />)
    const headerElement = screen.getByRole('banner')
    expect(headerElement).toBeInTheDocument()
  })
  test('should render hints when valid list of hints provided', () => {
    render(<Header hints={["Technology","Healthcare","Construction","Sydney","ABN number"]} {...defaultProps} />)
    const headerElement = screen.getByTestId('header')
    expect(headerElement).toBeInTheDocument()
  })
})

