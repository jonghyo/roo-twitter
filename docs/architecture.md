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

- **TweetForm**: ツイート投稿フォームを提供するコンポーネント
- **TweetList**: 投稿されたツイートを一覧表示するコンポーネント
- **TweetItem**: 各ツイートを表示するコンポーネント（編集・削除機能を含む）
- **Header**: ヘッダーコンポーネント
- **Footer**: フッターコンポーネント
- **Button**: 汎用ボタンコンポーネント
- **Modal**: モーダルコンポーネント

### 4. hooks

- **useTweets**: ツイートの状態管理を行うカスタムフック
- **useDarkMode**: ダークモードの状態管理を行うカスタムフック

### 5. Store

```typescript
// src/store/store.ts
import create from 'zustand'

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

const useStore = create<TweetState & UserState>((set) => ({
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
  user: null,
  setUser: (user) => set(() => ({ user }))
}))

export default useStore
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
