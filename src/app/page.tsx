'use client'

import dynamic from 'next/dynamic'

import { TweetList } from '@/components/features/TweetList'
import useStore from '@/store/store'

const TweetForm = dynamic(
  () => import('@/components/features/TweetForm').then((mod) => mod.default),
  {
    ssr: false
  }
)

/**
 *
 */
export default function Home() {
  const { tweets, addTweet } = useStore()

  const handleTweetSubmit = (content: string) => {
    const newTweet = {
      id: Date.now().toString(),
      content,
      createdAt: new Date()
    }
    addTweet(newTweet)
  }

  return (
    <main className="container mx-auto min-h-screen px-4 py-8">
      <section className="mx-auto max-w-2xl">
        <h1 className="mb-8 text-3xl font-bold">Roo Twitter</h1>
        <div className="rounded-lg border border-gray-200 bg-white dark:border-gray-800 dark:bg-black">
          {/* 投稿フォーム */}
          <div className="border-b border-gray-200 p-4 dark:border-gray-800">
            <TweetForm onSubmit={handleTweetSubmit} />
          </div>
          {/* ツイート一覧 */}
          <TweetList tweets={tweets} />
        </div>
      </section>
    </main>
  )
}
