import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { type Tweet } from '@/types/tweet'
import { type User } from '@/types/user'

export interface StoreState {
  // Navigation State
  currentPath: string
  setCurrentPath: (path: string) => void

  // Tweet State
  tweets: Tweet[]
  addTweet: (tweet: Tweet) => void
  updateTweet: (id: string, content: string) => void
  deleteTweet: (id: string) => void

  // User State
  user: User | null
  setUser: (user: User) => void

  // UI State
  isDarkMode: boolean
  toggleDarkMode: () => void
  isSidebarCollapsed: boolean
  toggleSidebar: () => void
}

const useStore = create<StoreState>()(
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
