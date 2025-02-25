import { render, fireEvent } from '@testing-library/react'
import React from 'react'
import { describe, expect, vi } from 'vitest'

import TweetForm from './TweetForm'

// `useStore` の `addTweet` をモック
const mockAddTweet = vi.fn()

vi.mock('../../store/store', () => ({
  default: vi.fn(() => ({
    addTweet: mockAddTweet
  }))
}))

describe('TweetForm', () => {
  beforeEach(() => {
    mockAddTweet.mockClear()
  })

  test('ユーザーがツイートを入力して送信できる', () => {
    const { getByPlaceholderText, getByText, getByRole } = render(<TweetForm />)

    const input = getByPlaceholderText('いまどうしてる？')
    const button = getByRole('button', { name: 'ツイートする' })

    // 入力フィールドにテキストを入力
    fireEvent.input(input, { target: { value: 'Hello, world!' } })
    expect(input).toHaveValue('Hello, world!')

    // 文字数カウンターが表示される
    expect(getByText('13/280文字')).toBeInTheDocument()

    // ボタンが有効化されている
    expect(button).not.toBeDisabled()

    // 送信ボタンをクリック
    fireEvent.click(button)

    // `addTweet` が期待通りに呼び出されたことを確認
    expect(mockAddTweet).toHaveBeenCalledTimes(1)
    expect(mockAddTweet).toHaveBeenCalledWith({
      id: expect.any(String),
      content: 'Hello, world!',
      createdAt: expect.any(Date)
    })

    // 送信後、入力フィールドがクリアされる
    expect(input).toHaveValue('')
    // 文字数カウンターがリセットされる
    expect(getByText('0/280文字')).toBeInTheDocument()
  })

  test('空のツイートは送信できない', () => {
    const { getByRole } = render(<TweetForm />)
    const button = getByRole('button', { name: 'ツイートする' })

    // ボタンが無効化されている
    expect(button).toBeDisabled()

    fireEvent.click(button)

    // `addTweet` は呼ばれないはず
    expect(mockAddTweet).not.toHaveBeenCalled()
  })

  test('280文字を超えるツイートは送信できない', () => {
    const { getByPlaceholderText, getByRole, getByText } = render(<TweetForm />)

    const input = getByPlaceholderText('いまどうしてる？')
    const button = getByRole('button', { name: 'ツイートする' })

    const longText = 'a'.repeat(281)
    fireEvent.input(input, { target: { value: longText } })

    // 文字数カウンターが表示される
    expect(getByText('281/280文字')).toBeInTheDocument()

    // ボタンが無効化されている
    expect(button).toBeDisabled()

    fireEvent.click(button)

    // `addTweet` は呼ばれないはず
    expect(mockAddTweet).not.toHaveBeenCalled()
  })
})
