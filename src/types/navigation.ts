import { type LucideIcon } from 'lucide-react'

export interface NavigationItem {
  /**
   * メニュー項目のID
   */
  id: string
  /**
   * 表示ラベル
   */
  label: string
  /**
   * リンク先のパス
   */
  path: string
  /**
   * Lucideアイコン
   */
  icon: LucideIcon
}
