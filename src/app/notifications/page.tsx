import { Bell } from 'lucide-react'

import { PageHeader } from '@/components/layout/PageHeader'

const mockNotifications = [
  {
    id: '1',
    type: 'like',
    content: 'あなたのツイートをいいねしました',
    user: 'ユーザー1',
    time: '2時間前'
  },
  {
    id: '2',
    type: 'retweet',
    content: 'あなたのツイートをリツイートしました',
    user: 'ユーザー2',
    time: '3時間前'
  },
  {
    id: '3',
    type: 'mention',
    content: 'あなたにメンションしました',
    user: 'ユーザー3',
    time: '4時間前'
  }
]

/**
 * 通知一覧ページ
 * - すべての通知と未読の通知を表示
 * - 通知の種類によって異なるアイコンを表示
 * @returns 通知ページのコンポーネント
 */
export default function NotificationsPage() {
  return (
    <div>
      <PageHeader title="通知" icon={Bell} description="あなたへの通知をチェック" />

      <div className="space-y-4">
        <div className="flex gap-2 border-b">
          <button className="border-primary border-b-2 px-4 py-2 text-sm font-medium">
            すべて
          </button>
          <button className="text-muted-foreground px-4 py-2 text-sm font-medium">
            未読
          </button>
        </div>

        <div className="space-y-2">
          {mockNotifications.map((notification) => (
            <div
              key={notification.id}
              className="hover:bg-accent/50 flex cursor-pointer items-center gap-4 rounded-lg border p-4"
            >
              <Bell className="text-primary h-5 w-5" />
              <div className="flex-1">
                <p className="font-medium">{notification.user}</p>
                <p className="text-muted-foreground text-sm">{notification.content}</p>
                <p className="text-muted-foreground mt-1 text-xs">{notification.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
