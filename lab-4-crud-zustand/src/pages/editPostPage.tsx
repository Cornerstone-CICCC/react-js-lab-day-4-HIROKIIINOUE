import { useNavigate, useParams } from 'react-router'
import { PostForm } from '../components/post-form'
import { PageLayout } from '../layouts/page.layout'
import { usePostStore } from '../post.store'

export function EditPostPage() {
  const { id = '' } = useParams()
  const post = usePostStore((state) =>
    state.posts.find((item) => item.id === id && !item.isDeleted),
  )
  const updatePost = usePostStore((state) => state.updatePost)
  const navigate = useNavigate()

  if (!post) {
    return (
      <PageLayout title="Edit Post">
        <p>Post not found.</p>
      </PageLayout>
    )
  }

  const handleSubmit = (title: string, content: string) => {
    updatePost(post.id, { title, content })
    navigate(`/posts/${post.id}`)
  }

  return (
    <PageLayout title="Edit Post">
      <PostForm
        initialTitle={post.title}
        initialContent={post.content}
        submitLabel="Save Changes"
        onSubmit={handleSubmit}
      />
    </PageLayout>
  )
}
