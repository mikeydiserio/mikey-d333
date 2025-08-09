import { render } from '@testing-library/react'

import TestingUtils from './testing-utils'

describe('TestingUtils', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TestingUtils />)
    expect(baseElement).toBeTruthy()
  })
})
