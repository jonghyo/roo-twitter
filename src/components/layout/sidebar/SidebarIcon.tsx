import { type LucideIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

interface SidebarIconProps {
  /**
   * Lucideアイコンコンポーネント
   */
  icon: LucideIcon
  /**
   * アイコンのサイズ（デフォルト: 24px）
   */
  size?: number
  /**
   * アイコンのカラー（デフォルト: currentColor）
   */
  color?: string
  /**
   * 追加のクラス名
   */
  className?: string
  /**
   * アクティブ状態を示すフラグ
   */
  isActive?: boolean
}

/**
 * サイドバーで使用するアイコンコンポーネント
 */
export const SidebarIcon = ({
  icon: Icon,
  size = 24,
  color = 'currentColor',
  className,
  isActive = false
}: SidebarIconProps) => (
  <Icon
    size={size}
    className={cn(
      'transition-colors duration-200',
      {
        'text-primary': isActive,
        'text-muted-foreground hover:text-foreground': !isActive
      },
      className
    )}
    color={color}
  />
)
