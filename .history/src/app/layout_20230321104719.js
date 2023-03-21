import './globals.css'

export const metadata = {
  title: 'MTJ',
  description: 'This is MTJ clone',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
