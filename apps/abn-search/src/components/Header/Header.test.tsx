import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Header from './Header'



describe('Header Component', () => {
  test('should render without crashing', () => {
    render(<Header />)

    expect(screen.getByText('AU Business Finder')).toBeInTheDocument()
    expect(
      screen.getByText('Australian Companies Register'),
    ).toBeInTheDocument()
  })

  test('should render navigation menu', () => {
    render(<Header />)

    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  test('should have proper semantic structure', () => {
    render(<Header />)
    const headerElement = screen.getByRole('banner')

    expect(headerElement).toBeInTheDocument()
  })
})
