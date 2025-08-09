import { Link, Route } from 'react-router-dom'

import styled from 'styled-components'

const StyledTestingUtils = styled.div`
  color: pink;
`
export function TestingUtils() {
  return (
    <StyledTestingUtils>
      <h1>Welcome to TestingUtils!</h1>
      <ul>
        <li>
          <Link to="/">testing-utils root</Link>
        </li>
      </ul>
      <Route
        path="/"
        element={<div>This is the testing-utils root route.</div>}
      />
    </StyledTestingUtils>
  )
}

export default TestingUtils
