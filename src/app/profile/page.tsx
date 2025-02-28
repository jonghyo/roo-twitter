import { Pencil, User } from 'lucide-react'

import { TweetList } from '@/components/features/TweetList'
import { PageHeader } from '@/components/layout/PageHeader'
import { Button } from '@/components/ui/button'
import { type Tweet } from '@/types/tweet'

const mockUser = {
  username: 'テストユーザー',
  bio: 'Next.js と React が大好きなエンジニアです。TypeScriptやTailwind CSSなども使っています。',
  location: '東京',
  joinedAt: '2024年1月',
  following: 123,
  followers: 456
}

const mockTweets: Tweet[] = [
  {
    id: '1',
    content:
      'Next.js 14でアプリを作っています。App RouterとServer Componentsの組み合わせは最高です！',
    createdAt: new Date('2024-02-29T10:00:00')
  },
  {
    id: '2',
    content:
      'Tailwind CSSとshadcn/uiを使うと、モダンでカスタマイズ可能なUIを素早く作れます。',
    createdAt: new Date('2024-02-28T15:30:00')
  }
]

/**
 * プロフィールページ
 * - ユーザー情報の表示
 * - プロフィール編集機能（モック）
 * - ユーザーのツイート一覧
 * @returns プロフィールページのコンポーネント
 */
export default function ProfilePage() {
  return (
    <div>
      <PageHeader title="プロフィール" icon={User} />

      {/* プロフィールカード */}
      <div className="mt-6 space-y-4 rounded-lg border p-6">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-xl font-bold">{mockUser.username}</h2>
            <p className="text-muted-foreground mt-1">{mockUser.bio}</p>
          </div>
          <Button variant="outline" size="sm">
            <Pencil className="mr-2 h-4 w-4" />
            編集
          </Button>
        </div>

        <div className="text-muted-foreground flex gap-6 text-sm">
          <p>📍 {mockUser.location}</p>
          <p>📅 {mockUser.joinedAt}に登録</p>
        </div>

        <div className="flex gap-4">
          <p className="text-sm">
            <span className="font-bold">{mockUser.following}</span>{' '}
            <span className="text-muted-foreground">フォロー中</span>
          </p>
          <p className="text-sm">
            <span className="font-bold">{mockUser.followers}</span>{' '}
            <span className="text-muted-foreground">フォロワー</span>
          </p>
        </div>
      </div>

      {/* ツイート一覧 */}
      <div className="mt-8">
        <h3 className="mb-4 text-lg font-semibold">ツイート</h3>
        <TweetList tweets={mockTweets} />
      </div>
    </div>
  )
}
