import { Users } from 'lucide-react'

import { PageHeader } from '@/components/layout/PageHeader'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'

const mockCommunities = [
  {
    id: '1',
    name: 'Next.js Developer Community',
    description: 'Next.jsの開発者コミュニティ。最新の情報共有や質問討議を行います。',
    memberCount: 1234,
    isJoined: true,
    topics: ['Next.js', 'React', 'Web開発']
  },
  {
    id: '2',
    name: 'UI/UXデザイナーズ',
    description:
      'UIデザインやUXについて語り合うコミュニティ。デザインの知見共有の場です。',
    memberCount: 856,
    isJoined: false,
    topics: ['デザイン', 'UI', 'UX']
  },
  {
    id: '3',
    name: 'TypeScript愛好会',
    description:
      'TypeScriptについて情報交換するコミュニティ。型の使い方や設計パターンを共有。',
    memberCount: 567,
    isJoined: true,
    topics: ['TypeScript', 'プログラミング']
  }
]

/**
 * コミュニティページ
 * - おすすめのコミュニティ表示
 * - 参加中のコミュニティ一覧
 * - コミュニティの参加/退会（モック）
 * @returns コミュニティページのコンポーネント
 */
export default function CommunitiesPage() {
  return (
    <div>
      <PageHeader
        title="コミュニティ"
        icon={Users}
        description="興味のある話題で繋がろう"
      />

      <div className="mt-6 space-y-6">
        {/* コミュニティ検索 */}
        <Card>
          <CardHeader>
            <CardTitle>コミュニティを探す</CardTitle>
            <CardDescription>
              あなたの興味のある話題のコミュニティを見つけましょう
            </CardDescription>
          </CardHeader>
          <CardContent>
            <input
              type="text"
              placeholder="キーワードで検索..."
              className="focus:ring-primary w-full rounded-md border px-3 py-2 focus:ring-2 focus:outline-none"
            />
          </CardContent>
        </Card>

        {/* コミュニティ一覧 */}
        <ScrollArea className="h-[600px]">
          <div className="space-y-4">
            {mockCommunities.map((community) => (
              <Card key={community.id}>
                <CardHeader>
                  <CardTitle className="text-lg">{community.name}</CardTitle>
                  <CardDescription>{community.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {community.topics.map((topic) => (
                        <span
                          key={topic}
                          className="bg-primary/10 text-primary rounded-full px-2 py-1 text-xs"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-muted-foreground flex items-center gap-2 text-sm">
                        <Users className="h-4 w-4" />
                        <span>{community.memberCount}人のメンバー</span>
                      </div>
                      <Button
                        variant={community.isJoined ? 'outline' : 'default'}
                        size="sm"
                      >
                        {community.isJoined ? '参加中' : '参加する'}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}
