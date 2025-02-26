import { render, screen } from '@testing-library/react'
import { describe, expect } from 'vitest'

import { type Tweet } from '@/types/tweet'

import { TweetList } from './TweetList'

describe('TweetList', () => {
  const mockTweets: Tweet[] = [
    {
      id: '1',
      content: '最新のツイート',
      createdAt: new Date('2024-02-26T10:00:00')
    },
    {
      id: '2',
      content: '古いツイート',
      createdAt: new Date('2024-02-26T09:00:00')
    }
  ]

  test('ツイートが時系列順（新しい順）に表示される', () => {
    render(<TweetList tweets={mockTweets} />)

    const tweetElements = screen.getAllByRole('article')
    expect(tweetElements).toHaveLength(2)

    const firstTweet = tweetElements[0]
    const secondTweet = tweetElements[1]

    expect(firstTweet).toHaveTextContent('最新のツイート')
    expect(secondTweet).toHaveTextContent('古いツイート')
  })

  test('ツイートが0件の場合、メッセージが表示される', () => {
    render(<TweetList tweets={[]} />)
    expect(screen.getByText('ツイートがありません')).toBeInTheDocument()
  })

  test('ツイートの内容と投稿日時が表示される', () => {
    render(<TweetList tweets={[mockTweets[0]!]} />)

    expect(screen.getByText('最新のツイート')).toBeInTheDocument()
    expect(screen.getByText('2024年2月26日 10:00')).toBeInTheDocument()
  })
})
