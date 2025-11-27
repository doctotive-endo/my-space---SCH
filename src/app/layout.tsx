import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'My Space - 나만의 공간',
  description: '픽셀 그래픽 가상 공간 - 직원용 프로필 및 업적 관리',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
