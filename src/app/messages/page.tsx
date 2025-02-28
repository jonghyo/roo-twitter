import { Mail, Send } from 'lucide-react'

import { PageHeader } from '@/components/layout/PageHeader'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'

const mockMessages = [
  {
    id: '1',
    user: 'ユーザー1',
    content: 'こんにちは！',
    time: '14:00',
    isMe: false
  },
  {
    id: '2',
    user: '自分',
    content: 'はじめまして！',
    time: '14:01',
    isMe: true
  },
  {
    id: '3',
    user: 'ユーザー1',
    content: '今日はいい天気ですね。',
    time: '14:02',
    isMe: false
  }
]

/**
 * メッセージ一覧・チャットページ
 * - チャットのモックUIを表示
 * - メッセージの送受信をシミュレート
 * @returns メッセージページのコンポーネント
 */
export default function MessagesPage() {
  return (
    <div>
      <PageHeader title="メッセージ" icon={Mail} description="ダイレクトメッセージ" />

      <div className="grid h-[calc(100vh-12rem)] gap-4 md:grid-cols-[300px_1fr]">
        {/* メッセージリスト */}
        <div className="rounded-lg border">
          <ScrollArea className="h-full">
            <div className="space-y-2 p-4">
              {['ユーザー1', 'ユーザー2', 'ユーザー3'].map((user) => (
                <div key={user} className="hover:bg-accent cursor-pointer rounded-md p-3">
                  <p className="font-medium">{user}</p>
                  <p className="text-muted-foreground text-sm">最新のメッセージ...</p>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>

        {/* チャット画面 */}
        <div className="flex flex-col rounded-lg border">
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {mockMessages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-2 ${message.isMe ? 'flex-row-reverse' : ''}`}
                >
                  <div
                    className={`max-w-[70%] ${
                      message.isMe ? 'bg-primary text-primary-foreground' : 'bg-muted'
                    } rounded-lg p-3`}
                  >
                    <p className="text-sm">{message.content}</p>
                    <p className="mt-1 text-xs opacity-70">{message.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          {/* 入力フォーム */}
          <div className="border-t p-4">
            <form className="flex gap-2">
              <input
                type="text"
                placeholder="メッセージを入力..."
                className="focus:ring-primary flex-1 rounded-md border px-3 py-2 focus:ring-2 focus:outline-none"
              />
              <Button size="icon" type="submit">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
