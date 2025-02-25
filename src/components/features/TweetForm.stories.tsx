import { type Meta, type StoryObj } from '@storybook/react'

import TweetForm from './TweetForm'
import { MockStoreDecorator } from './TweetForm.mocks'

const meta = {
  title: 'Features/TweetForm',
  component: TweetForm,
  parameters: {
    backgrounds: {
      default: 'light'
    }
  },
  tags: ['autodocs'],
  decorators: [MockStoreDecorator] // デコレーターを追加
} satisfies Meta<typeof TweetForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {}
}

export const WithMockedSubmit: Story = {
  args: {},
  parameters: {
    mockData: [
      {
        fn: () => {
          // eslint-disable-next-line no-console
          console.log('Tweet submitted!')
        }
      }
    ]
  }
}
