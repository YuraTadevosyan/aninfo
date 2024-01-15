import type { Metadata } from 'next'
import { Roboto_Condensed } from 'next/font/google'
import './globals.css'

// Components
import { Header, Footer } from '@/components'

const robotoCondensed = Roboto_Condensed({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Anime Info App',
  description: 'Explore Anime with us',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={robotoCondensed.className}>
				<Header />
			
				<main className="container mx-auto flex flex-col items-center justify-between py-24">
					{children}
				</main>
			
				<Footer />
			</body>
    </html>
  )
}
