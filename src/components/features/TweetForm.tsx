import { Send } from 'lucide-react'
import React, { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'

export interface TweetFormProps {
  onSubmit?: (content: string) => void
}

const TweetForm: React.FC<TweetFormProps> = ({ onSubmit }) => {
  const [content, setContent] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (content.length > 0 && content.length <= 280) {
      onSubmit?.(content)
      setContent('')
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-card w-full max-w-2xl space-y-4 rounded-lg border p-4"
    >
      <Textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        maxLength={280}
        placeholder="いまどうしてる？"
        className="border-input focus:border-primary min-h-[100px] w-full resize-none border-2"
      />
      <div className="flex items-center justify-between space-x-4">
        <span className="text-muted-foreground flex-shrink-0 text-sm">
          {content.length}/280文字
        </span>
        <Button
          type="submit"
          disabled={content.length === 0 || content.length > 280}
          className="bg-primary hover:bg-primary/90 flex-shrink-0"
        >
          <Send className="mr-2 h-4 w-4" />
          ツイートする
        </Button>
      </div>
    </form>
  )
}

export default TweetForm
