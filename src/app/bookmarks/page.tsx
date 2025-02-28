import { Bookmark } from 'lucide-react'

import { TweetList } from '@/components/features/TweetList'
import { PageHeader } from '@/components/layout/PageHeader'
import { type Tweet } from '@/types/tweet'

const mockBookmarks: Tweet[] = [
  {
    id: '1',
    content:
      'Next.js 14の新機能について解説します。Server Actionsの活用方法や、Parallel RoutesとIntercepting Routesの使い方など、実践的な内容をまとめました！',
    createdAt: new Date('2024-02-28T10:00:00')
  },
  {
    id: '2',
    content:
      'React Server ComponentsとClient Componentsの使い分けについて、パフォーマンスの観点から考察してみました。どちらを選択すべきかの判断基準を解説します。',
    createdAt: new Date('2024-02-27T15:30:00')
  }
]

/**
 * ブックマークページ
 * - 保存したツイートの一覧を表示
 * - TweetListコンポーネントを再利用
 * @returns ブックマークページのコンポーネント
 */
export default function BookmarksPage() {
  return (
    <div>
      <PageHeader title="ブックマーク" icon={Bookmark} description="保存したツイート" />

      <div className="mt-6">
        <TweetList tweets={mockBookmarks} />
      </div>
    </div>
  )
}
