import { type Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'
import { Sidebar } from '@/components/layout/sidebar/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Twitter Clone',
  description: 'Next.jsで作成したTwitterクローン'
}

/**
 *
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <div className="relative min-h-screen">
          {/* サイドバー */}
          <Sidebar />

          {/* メインコンテンツ */}
          <main className="min-h-screen p-6 md:pl-[300px]">{children}</main>
        </div>
      </body>
    </html>
  )
}
