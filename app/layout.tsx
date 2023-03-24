import './globals.css'

export const metadata = {
  title: 'Chaty',
  description: 'Chaty the real-time live chat',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
