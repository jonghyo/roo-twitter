import { type Tweet } from '@/types/tweet'
import { type User } from '@/types/user'

import { TweetItem } from './TweetItem'
import { getRandomAvatar, getRandomUsername } from './TweetList.mocks'

interface TweetListProps {
  tweets: Tweet[]
}

// 各ツイートに対応するユーザー情報を生成するためのMap
const userMap = new Map<string, User>()

const getOrCreateUser = (tweetId: string): User => {
  if (!userMap.has(tweetId)) {
    userMap.set(tweetId, {
      id: tweetId,
      username: getRandomUsername(),
      avatarUrl: getRandomAvatar()
    })
  }
  return userMap.get(tweetId)!
}

/**
 * ツイート一覧を表示するコンポーネント
 * @param props - コンポーネントのプロパティ
 * @param props.tweets - 表示するツイートの配列
 * @returns ツイート一覧コンポーネント
 */
export const TweetList = ({ tweets }: TweetListProps) => {
  if (tweets.length === 0) {
    return (
      <div className="flex h-32 items-center justify-center text-gray-500">
        ツイートがありません
      </div>
    )
  }

  // 新しい順にソート
  const sortedTweets = [...tweets].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  )

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-800">
      {sortedTweets.map((tweet) => (
        <TweetItem key={tweet.id} tweet={tweet} user={getOrCreateUser(tweet.id)} />
      ))}
    </div>
  )
}
