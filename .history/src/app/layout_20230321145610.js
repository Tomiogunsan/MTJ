import Header from './components/Header'
import './globals.css'
import Providers from './Provider'

export const metadata = {
  title: 'MTJ',
  description: 'This is MTJ website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
    <Providers>
      {/* header */}
      <Header />
        {/* navbar */}
        
        {/* searchbox */}
        {children}
    </Providers>
        
        </body>
    </html>
  )
}
