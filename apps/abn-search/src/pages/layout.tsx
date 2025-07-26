import { ReactNode } from 'react'
import StyledComponentsRegistry from '../styling/StyledComponentsRegistry'
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
