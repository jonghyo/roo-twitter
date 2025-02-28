import { type LucideIcon } from 'lucide-react'

interface PageHeaderProps {
  /**
   * ページのタイトル
   */
  title: string
  /**
   * ページのアイコン
   */
  icon?: LucideIcon
  /**
   * ページの説明
   */
  description?: string
}

/**
 * 各ページ共通のヘッダーコンポーネント
 */
export const PageHeader = ({ title, icon: Icon, description }: PageHeaderProps) => (
  <div className="mb-4 flex items-center gap-4 border-b pb-4">
    {Icon && <Icon className="h-6 w-6" />}
    <div>
      <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
      {description && <p className="text-muted-foreground text-sm">{description}</p>}
    </div>
  </div>
)
