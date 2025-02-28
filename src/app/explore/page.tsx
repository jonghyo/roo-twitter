import { Search } from 'lucide-react'

import { PageHeader } from '@/components/layout/PageHeader'

/**
 *
 */
export default function ExplorePage() {
  return (
    <div>
      <PageHeader title="検索" icon={Search} description="トピックやトレンドを探す" />
      <div className="grid gap-4">
        <div className="rounded-lg border p-4">
          <h2 className="mb-2 text-lg font-semibold">トレンド</h2>
          <p className="text-muted-foreground text-sm">
            現在のトレンドはモックデータとして表示されています。
          </p>
        </div>

        <div className="rounded-lg border p-4">
          <h2 className="mb-2 text-lg font-semibold">おすすめのトピック</h2>
          <ul className="space-y-2">
            {['テクノロジー', 'エンターテイメント', 'スポーツ', 'ニュース'].map(
              (topic) => (
                <li key={topic} className="hover:bg-accent cursor-pointer rounded-md p-2">
                  {topic}
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}
