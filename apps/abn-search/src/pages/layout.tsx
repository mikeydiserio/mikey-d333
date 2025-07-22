import { ReactNode } from 'react'
import ClientLayout from '../styling/ClientLayout'
import StyledComponentsRegistry from '../styling/StyledComponentsRegistry'
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <ClientLayout>{children}</ClientLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
