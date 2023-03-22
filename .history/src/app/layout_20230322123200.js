import Header from './components/Header'
import Navbar from './components/Navbar'
import SearchBox from './components/SearchBox'
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
        <Navbar />
        {/* searchbox */}
        <SearchBox />
        {children}
    </Providers>
        
        </body>
    </html>
  )
}
