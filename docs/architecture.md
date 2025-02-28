## マイクロブログシステム アーキテクチャ設計

### 1. ディレクトリ構成

```
/src
  /app
    - favicon.ico
    - globals.css
    - layout.tsx
    - page.tsx
  /components
    /features
      - TweetForm.tsx
      - TweetList.tsx
      - TweetItem.tsx
    /layout
      - Header.tsx
      - Footer.tsx
    /ui
      - Button.tsx
      - Modal.tsx
  /hooks
    - useTweets.ts
    - useDarkMode.ts
  /store
    - store.ts
  /lib
    - localStorage.ts
  /styles
    - globals.css
    - dark-mode.css
  /types
    - tweet.ts
    - user.ts
  /pages
    - index.tsx
```

### 2. ドメイン（型情報など）

```typescript
// src/types/tweet.ts
export interface Tweet {
  id: string
  content: string
  createdAt: Date
  updatedAt?: Date
}

// src/types/user.ts
export interface User {
  id: string
  username: string
  avatarUrl: string
}
```

### 3. コンポーネント設計

#### 3.1 ツイート関連コンポーネント

- **TweetForm**: ツイート投稿フォームを提供するコンポーネント
- **TweetList**: 投稿されたツイートを一覧表示するコンポーネント
- **TweetItem**: 各ツイートを表示するコンポーネント（編集・削除機能を含む）

#### 3.2 レイアウトコンポーネント

- **Sidebar**: サイドバーナビゲーションコンポーネント
  - **SidebarNav**: ナビゲーションメニューのコンテナ
  - **SidebarItem**: 各メニュー項目のコンポーネント
  - **SidebarIcon**: メニューアイコンコンポーネント
- **Header**: ヘッダーコンポーネント
- **Footer**: フッターコンポーネント

#### 3.3 UI共通コンポーネント

- **Button**: 汎用ボタンコンポーネント
- **Modal**: モーダルコンポーネント
- **Icon**: アイコンコンポーネント

### 4. hooks

- **useTweets**: ツイートの状態管理を行うカスタムフック
- **useDarkMode**: ダークモードの状態管理を行うカスタムフック

### 5. アプリケーション状態管理

#### 5.1 Zustand Store設計

```typescript
// src/store/store.ts
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface NavigationState {
  currentPath: string
  setCurrentPath: (path: string) => void
}

interface TweetState {
  tweets: Tweet[]
  addTweet: (tweet: Tweet) => void
  updateTweet: (id: string, content: string) => void
  deleteTweet: (id: string) => void
}

interface UserState {
  user: User | null
  setUser: (user: User) => void
}

interface UIState {
  isDarkMode: boolean
  toggleDarkMode: () => void
  isSidebarCollapsed: boolean
  toggleSidebar: () => void
}

const useStore = create<NavigationState & TweetState & UserState & UIState>(
  persist(
    (set) => ({
      // Navigation State
      currentPath: '/',
      setCurrentPath: (path) => set({ currentPath: path }),

      // Tweet State
      tweets: [],
      addTweet: (tweet) => set((state) => ({ tweets: [...state.tweets, tweet] })),
      updateTweet: (id, content) =>
        set((state) => ({
          tweets: state.tweets.map((tweet) =>
            tweet.id === id ? { ...tweet, content, updatedAt: new Date() } : tweet
          )
        })),
      deleteTweet: (id) =>
        set((state) => ({
          tweets: state.tweets.filter((tweet) => tweet.id !== id)
        })),

      // User State
      user: null,
      setUser: (user) => set({ user }),

      // UI State
      isDarkMode: false,
      toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
      isSidebarCollapsed: false,
      toggleSidebar: () =>
        set((state) => ({ isSidebarCollapsed: !state.isSidebarCollapsed }))
    }),
    {
      name: 'twitter-clone-storage'
    }
  )
)

export default useStore
```

#### 5.2 モックデータ設計

```typescript
// src/mocks/navigation.ts
export const navigationItems = [
  { id: 'home', label: 'ホーム', path: '/', icon: 'home' },
  { id: 'explore', label: '検索', path: '/explore', icon: 'search' },
  { id: 'notifications', label: '通知', path: '/notifications', icon: 'bell' },
  { id: 'messages', label: 'メッセージ', path: '/messages', icon: 'mail' },
  { id: 'lists', label: 'リスト', path: '/lists', icon: 'list' },
  { id: 'bookmarks', label: 'ブックマーク', path: '/bookmarks', icon: 'bookmark' },
  { id: 'communities', label: 'コミュニティ', path: '/communities', icon: 'users' },
  { id: 'premium', label: 'プレミアム', path: '/premium', icon: 'star' },
  { id: 'profile', label: 'プロフィール', path: '/profile', icon: 'user' },
  { id: 'more', label: 'その他', path: '/more', icon: 'more' }
]

// src/mocks/notifications.ts
export const mockNotifications = [
  {
    id: '1',
    type: 'like',
    user: 'ユーザー1',
    content: 'いいね！しました',
    timestamp: new Date()
  },
  {
    id: '2',
    type: 'retweet',
    user: 'ユーザー2',
    content: 'リツイートしました',
    timestamp: new Date()
  }
]

// src/mocks/messages.ts
export const mockMessages = [
  { id: '1', user: 'ユーザー1', content: 'こんにちは！', timestamp: new Date() },
  { id: '2', user: 'ユーザー2', content: 'お疲れ様です', timestamp: new Date() }
]
```

#### 5.3 ルーティング構造

```
/src/app/
  ├── page.tsx              # ホーム
  ├── explore/
  │   └── page.tsx          # 検索
  ├── notifications/
  │   └── page.tsx          # 通知
  ├── messages/
  │   └── page.tsx          # メッセージ
  ├── lists/
  │   └── page.tsx          # リスト
  ├── bookmarks/
  │   └── page.tsx          # ブックマーク
  ├── communities/
  │   └── page.tsx          # コミュニティ
  ├── premium/
  │   └── page.tsx          # プレミアム
  ├── profile/
  │   └── page.tsx          # プロフィール
  └── more/
      └── page.tsx          # その他
```

### 6. デザイン（カラーコード、UI、アニメーションなど）

- **カラーコード**:

  - プライマリカラー: #1DA1F2
  - セカンダリカラー: #14171A
  - 背景カラー: #FFFFFF（ライトモード）、#000000（ダークモード）
  - テキストカラー: #657786（ライトモード）、#AAB8C2（ダークモード）

- **UI**:

  - モダンでシンプルなデザイン
  - レスポンシブ対応
  - ダークモード対応
  - ユーザープロフィール表示（ユーザー名、アバター）

- **アニメーション**:
  - ボタンホバー時のアニメーション（スケールアップ）
  - 投稿時のフェードインアニメーション（opacity 0から1）
  - 削除時のフェードアウトアニメーション（opacity 1から0）
  - モーダル表示時のスライドインアニメーション（下から上）
