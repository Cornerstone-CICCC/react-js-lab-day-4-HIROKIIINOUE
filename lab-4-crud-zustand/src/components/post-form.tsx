import { useState } from 'react'
import type { FormEvent } from 'react'

type PostFormProps = {
  initialTitle?: string
  initialContent?: string
  submitLabel: string
  onSubmit: (title: string, content: string) => void
}

export function PostForm({
  initialTitle = '',
  initialContent = '',
  submitLabel,
  onSubmit,
}: PostFormProps) {
  const [title, setTitle] = useState(initialTitle)
  const [content, setContent] = useState(initialContent)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSubmit(title.trim(), content.trim())
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="title">Title</label>
      </p>
      <p>
        <input
          id="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          required
        />
      </p>
      <p>
        <label htmlFor="content">Content</label>
      </p>
      <p>
        <textarea
          id="content"
          value={content}
          onChange={(event) => setContent(event.target.value)}
          required
          rows={6}
        />
      </p>
      <button type="submit">{submitLabel}</button>
    </form>
  )
}
