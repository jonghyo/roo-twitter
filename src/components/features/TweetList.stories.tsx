import { type Meta, type StoryObj } from '@storybook/react'

import { TweetList } from './TweetList'
import { mockTweets } from './TweetList.mocks'

const meta = {
  title: 'Features/TweetList',
  component: TweetList,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#000000' }
      ]
    }
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-2xl">
        <Story />
      </div>
    )
  ]
} satisfies Meta<typeof TweetList>

export default meta
type Story = StoryObj<typeof meta>

/**
 * 複数のツイートが表示される状態
 */
export const Default: Story = {
  args: {
    tweets: mockTweets
  }
}

/**
 * ツイートが1件も無い状態
 */
export const Empty: Story = {
  args: {
    tweets: []
  }
}

/**
 * 1件のツイートのみ表示される状態
 */
export const SingleTweet: Story = {
  args: {
    tweets: mockTweets.slice(0, 1)
  }
}
