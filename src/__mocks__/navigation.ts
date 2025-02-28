import {
  Bell,
  Bookmark,
  Home,
  Mail,
  ListOrdered,
  MoreHorizontal,
  Search,
  Star,
  User,
  Users
} from 'lucide-react'

import { type NavigationItem } from '@/types/navigation'

/**
 * サイドバーナビゲーションのモックデータ
 */
export const navigationItems: NavigationItem[] = [
  {
    id: 'home',
    label: 'ホーム',
    path: '/',
    icon: Home
  },
  {
    id: 'explore',
    label: '検索',
    path: '/explore',
    icon: Search
  },
  {
    id: 'notifications',
    label: '通知',
    path: '/notifications',
    icon: Bell
  },
  {
    id: 'messages',
    label: 'メッセージ',
    path: '/messages',
    icon: Mail
  },
  {
    id: 'lists',
    label: 'リスト',
    path: '/lists',
    icon: ListOrdered
  },
  {
    id: 'bookmarks',
    label: 'ブックマーク',
    path: '/bookmarks',
    icon: Bookmark
  },
  {
    id: 'communities',
    label: 'コミュニティ',
    path: '/communities',
    icon: Users
  },
  {
    id: 'premium',
    label: 'プレミアム',
    path: '/premium',
    icon: Star
  },
  {
    id: 'profile',
    label: 'プロフィール',
    path: '/profile',
    icon: User
  },
  {
    id: 'more',
    label: 'その他',
    path: '/more',
    icon: MoreHorizontal
  }
]
