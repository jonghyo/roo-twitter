import Image from 'next/image'

import { type Tweet } from '@/types/tweet'
import { type User } from '@/types/user'

interface TweetItemProps {
  tweet: Tweet
  user: User
}

/**
 * 個別のツイートを表示するコンポーネント
 * @param props - コンポーネントのプロパティ
 * @param props.tweet - ツイートデータ
 * @param props.user - ユーザーデータ
 * @returns ツイートアイテムコンポーネント
 */
export const TweetItem = ({ tweet, user }: TweetItemProps) => (
  <article className="border-b border-gray-200 p-4 hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-900">
    <div className="flex items-start space-x-3">
      <Image
        src={user.avatarUrl}
        alt={`${user.username}のアバター`}
        width={48}
        height={48}
        className="rounded-full"
      />
      <div className="flex-1">
        {/* ユーザー情報とツイート時間 */}
        <div className="flex items-center space-x-1">
          <span className="font-bold text-gray-900 dark:text-gray-100">
            {user.username}
          </span>
          <span className="text-sm text-gray-500">•</span>
          <time className="text-sm text-gray-500">
            {new Date(tweet.createdAt).toLocaleString('ja-JP', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: 'numeric',
              minute: 'numeric'
            })}
          </time>
        </div>
        {/* ツイート本文 */}
        <p className="mt-2 whitespace-pre-wrap text-gray-900 dark:text-gray-100">
          {tweet.content}
        </p>
      </div>
    </div>
  </article>
)
