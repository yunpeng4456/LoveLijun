import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'loveLiJun♥',
  description: '🌈花会沿路盛开 正如我们的未来🌻',
  icons: 'favicon.png'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>

      <body >
        {children}

      </body>
    </html>
  )
}
