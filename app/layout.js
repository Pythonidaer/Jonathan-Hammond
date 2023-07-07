import './globals.css'
import { Inter } from 'next/font/google'
import Header from './(components)/Header.js'
import Footer from './(components)/Footer.js'
import ScrollDownButton from './(components)/ScrollDownButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Jonathan Hammond: Portfolio',
  description: 'Designed for employers to review',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`relative min-h-screen   ${inter.className}`}>
        <Header />
        {children}
        <ScrollDownButton />

        <Footer />
      </body>
    </html>
  )
}
