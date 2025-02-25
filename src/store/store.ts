import { create } from 'zustand'

import { type Tweet } from '@/types/tweet'
import { type User } from '@/types/user'

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
  addTweet: (tweet: Tweet) =>
    set((state: TweetState) => ({ tweets: [...state.tweets, tweet] })),
  updateTweet: (id: string, content: string) =>
    set((state: TweetState) => ({
      tweets: state.tweets.map((tweet: Tweet) =>
        tweet.id === id ? { ...tweet, content, updatedAt: new Date() } : tweet
      )
    })),
  deleteTweet: (id: string) =>
    set((state: TweetState) => ({
      tweets: state.tweets.filter((tweet: Tweet) => tweet.id !== id)
    })),
  user: null,
  setUser: (user: User) => set(() => ({ user }))
}))

export default useStore
