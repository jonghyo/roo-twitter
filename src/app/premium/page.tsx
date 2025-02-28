import { Check, Star } from 'lucide-react'

import { PageHeader } from '@/components/layout/PageHeader'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

const premiumFeatures = [
  'ツイートの最大文字数が2倍に',
  'プレミアムバッジの表示',
  '優先サポート対応',
  '広告の非表示',
  '高度な分析機能',
  'コンテンツのブックマーク数無制限'
]

/**
 * プレミアムページ
 * - プレミアム機能の説明
 * - 特典の一覧表示
 * - 購入ボタン（モック）
 * @returns プレミアムページのコンポーネント
 */
export default function PremiumPage() {
  return (
    <div>
      <PageHeader title="プレミアム" icon={Star} description="より豊かなTwitter体験を" />

      <div className="mt-6">
        <Card className="mx-auto w-full max-w-2xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Star className="text-primary h-6 w-6" />
              Twitter Premium
            </CardTitle>
            <CardDescription>
              プレミアム会員になって、より多くの機能を利用しましょう
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-2xl font-bold">
              ¥980{' '}
              <span className="text-muted-foreground text-base font-normal">/月</span>
            </div>

            <ul className="space-y-2">
              {premiumFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <Check className="text-primary h-4 w-4" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full" size="lg">
              プレミアムに登録
            </Button>
          </CardFooter>
        </Card>

        {/* 注意書き */}
        <p className="text-muted-foreground mt-4 text-center text-sm">
          ※ これはデモアプリです。実際の課金は発生しません。
        </p>
      </div>
    </div>
  )
}
