import { type LucideIcon } from 'lucide-react'
import Link from 'next/link'

import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

import { SidebarIcon } from './SidebarIcon'

interface SidebarItemProps {
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
  /**
   * アクティブ状態を示すフラグ
   */
  isActive?: boolean
  /**
   * 追加のクラス名
   */
  className?: string
  /**
   * サイドバーが折りたたまれているかのフラグ
   */
  isCollapsed?: boolean
}

/**
 * サイドバーのメニュー項目コンポーネント
 */
export const SidebarItem = ({
  label,
  path,
  icon,
  isActive = false,
  className,
  isCollapsed = false
}: SidebarItemProps) => (
  <Link
    href={path}
    className={cn(
      buttonVariants({ variant: 'ghost' }),
      'w-full justify-start gap-4 px-4',
      {
        'bg-accent': isActive
      },
      className
    )}
    aria-current={isActive ? 'page' : undefined}
  >
    <SidebarIcon icon={icon} isActive={isActive} />
    {!isCollapsed && (
      <span
        className={cn('text-base', {
          'font-semibold': isActive,
          'text-muted-foreground': !isActive
        })}
      >
        {label}
      </span>
    )}
  </Link>
)
