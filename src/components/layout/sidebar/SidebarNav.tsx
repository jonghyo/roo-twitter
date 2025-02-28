import { navigationItems } from '@/__mocks__/navigation'
import { ScrollArea } from '@/components/ui/scroll-area'
import { cn } from '@/lib/utils'
import useStore from '@/store/store'
import { type NavigationItem } from '@/types/navigation'

import { SidebarItem } from './SidebarItem'

interface SidebarNavProps {
  /**
   * サイドバーが折りたたまれているかのフラグ
   */
  isCollapsed?: boolean
  /**
   * 追加のクラス名
   */
  className?: string
}

/**
 * サイドバーのナビゲーションコンポーネント
 */
export const SidebarNav = ({ isCollapsed = false, className }: SidebarNavProps) => {
  const currentPath = useStore((state) => state.currentPath)

  return (
    <ScrollArea className={cn('h-[calc(100vh-4rem)]', className)}>
      <nav className="flex flex-col gap-2 p-2">
        {navigationItems.map((item: NavigationItem) => (
          <SidebarItem
            key={item.id}
            {...item}
            isActive={currentPath === item.path}
            isCollapsed={isCollapsed}
          />
        ))}
      </nav>
    </ScrollArea>
  )
}
