import type { Metadata } from 'next'
import Header from './components/header/header'
import './globals.css'

export const metadata: Metadata = {
  title: 'Barstool Sports Challenge',
  description: 'Challenge Accepted',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='min-h-screen bg-gray-300'>
        <main className='flex flex-col items-center max-w-4xl w-screen mx-auto '>
          <Header />
          {children}
        </main>
      </body>
    </html>
  )
}
