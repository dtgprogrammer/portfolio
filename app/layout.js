import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Devansh Awasthi',
  description: 'Portfolio website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className=' scroll-smooth'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
