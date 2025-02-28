import { useState } from 'react'

import useStore from '../../store/store'
import { type Tweet } from '../../types/tweet'

// Storybook用のモックストア
export const MockStoreDecorator = (Story: React.ComponentType) => {
  const [tweets, setTweets] = useState<Tweet[]>([])

  // モックストアを提供
  useStore.setState({
    tweets,
    addTweet: (newTweet: Tweet) => {
      setTweets([...tweets, newTweet])
       
      console.log('Tweet added:', newTweet)
    }
  })

  return <Story />
}
