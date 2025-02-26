import { type Tweet } from '@/types/tweet'
import { type User } from '@/types/user'

// ランダムなアバター画像URLを生成
export const getRandomAvatar = () => {
  const styles = ['pixel-art', 'bottts', 'avataaars', 'personas']
  const randomStyle = styles[Math.floor(Math.random() * styles.length)]
  const randomSeed = Math.random().toString(36).substring(7)
  return `https://api.dicebear.com/7.x/${randomStyle}/svg?seed=${randomSeed}`
}

// ランダムなユーザー名を生成
export const getRandomUsername = () => {
  const adjectives = ['Happy', 'Lucky', 'Sunny', 'Cool', 'Super']
  const nouns = ['Bird', 'Cat', 'Dog', 'Fox', 'Panda']
  const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)]
  const randomNoun = nouns[Math.floor(Math.random() * nouns.length)]
  return `${randomAdjective}${randomNoun}`
}

export const mockUser: User = {
  id: '1',
  username: getRandomUsername(),
  avatarUrl: getRandomAvatar()
}

export const mockTweets: Tweet[] = [
  {
    id: '1',
    content: '最新のツイート',
    createdAt: new Date('2024-02-26T10:00:00')
  },
  {
    id: '2',
    content: '古いツイート',
    createdAt: new Date('2024-02-26T09:00:00')
  }
]
