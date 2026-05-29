import { useNavigate } from 'react-router'
import { PostForm } from '../components/post-form'
import { PageLayout } from '../layouts/page.layout'
import { usePostStore } from '../post.store'

export function NewPostPage() {
  const addPost = usePostStore((state) => state.addPost)
  const navigate = useNavigate()

  const handleSubmit = (title: string, content: string) => {
    const id = crypto.randomUUID()
    addPost({ id, title, content, isDeleted: false })
    navigate(`/posts/${id}`)
  }

  return (
    <PageLayout title="Add Post">
      <PostForm submitLabel="Create Post" onSubmit={handleSubmit} />
    </PageLayout>
  )
}
