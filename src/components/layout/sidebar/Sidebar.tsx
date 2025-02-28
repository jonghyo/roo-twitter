'use client'
import { Menu } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import useStore from '@/store/store'

import { SidebarNav } from './SidebarNav'

interface SidebarProps {
  /**
   * 追加のクラス名
   */
  className?: string
}

/**
 * サイドバーコンポーネント
 * - モバイルではシートとして表示
 * - デスクトップでは固定表示
 */
export const Sidebar = ({ className }: SidebarProps) => {
  const isSidebarCollapsed = useStore((state) => state.isSidebarCollapsed)
  const toggleSidebar = useStore((state) => state.toggleSidebar)

  return (
    <>
      {/* モバイル向けサイドバー */}
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="fixed top-4 left-4 z-40 md:hidden"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[300px] p-0">
          <SidebarNav />
        </SheetContent>
      </Sheet>

      {/* デスクトップ向けサイドバー */}
      <aside
        className={cn(
          'fixed hidden h-screen border-r transition-all duration-300 md:flex',
          {
            'w-[300px]': !isSidebarCollapsed,
            'w-[80px]': isSidebarCollapsed === true
          },
          className
        )}
      >
        <div className="flex w-full flex-col">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => toggleSidebar()}
            className="absolute top-4 right-4"
          >
            <Menu className="h-6 w-6" />
          </Button>
          <SidebarNav isCollapsed={isSidebarCollapsed} />
        </div>
      </aside>
    </>
  )
}
