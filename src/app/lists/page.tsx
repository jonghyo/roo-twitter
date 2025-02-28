import { ListStart, Plus, Users } from 'lucide-react'

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

const mockLists = [
  {
    id: '1',
    name: 'テック系アカウント',
    description: '技術情報をシェアするアカウントのリスト',
    memberCount: 25,
    subscriberCount: 128,
    isOwner: true
  },
  {
    id: '2',
    name: 'ニュースメディア',
    description: '主要なニュースメディアのアカウント',
    memberCount: 15,
    subscriberCount: 256,
    isOwner: true
  },
  {
    id: '3',
    name: 'エンジニアコミュニティ',
    description: 'エンジニアの情報交換コミュニティ',
    memberCount: 50,
    subscriberCount: 512,
    isOwner: false
  }
]

/**
 * リストページ
 * - 作成したリストの表示
 * - フォロー中のリストの表示
 * - 新規リスト作成（モック）
 * @returns リストページのコンポーネント
 */
export default function ListsPage() {
  return (
    <div>
      <PageHeader title="リスト" icon={ListStart} description="リストの管理と閲覧" />

      <div className="mt-6 space-y-6">
        {/* 新規リスト作成カード */}
        <Card>
          <CardHeader>
            <CardTitle>新規リスト作成</CardTitle>
            <CardDescription>
              興味のあるアカウントをグループ化して、タイムラインを整理できます
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              新しいリストを作成
            </Button>
          </CardContent>
        </Card>

        {/* リスト一覧 */}
        <ScrollArea className="h-[500px]">
          <div className="space-y-4">
            {mockLists.map((list) => (
              <Card key={list.id}>
                <CardHeader>
                  <CardTitle className="text-lg">{list.name}</CardTitle>
                  <CardDescription>{list.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-muted-foreground flex gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>{list.memberCount}人のメンバー</span>
                      </div>
                      <div>{list.subscriberCount}人のフォロワー</div>
                    </div>
                    {list.isOwner ? (
                      <Button variant="outline" size="sm">
                        編集
                      </Button>
                    ) : (
                      <Button variant="outline" size="sm">
                        フォロー中
                      </Button>
                    )}
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
