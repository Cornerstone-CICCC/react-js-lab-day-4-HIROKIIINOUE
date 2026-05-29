import { Link, useNavigate, useParams } from 'react-router'
import { PageLayout } from '../layouts/page.layout'
import { usePostStore } from '../post.store'

export function PostDetailPage() {
  const { id = '' } = useParams()
  const post = usePostStore((state) =>
    state.posts.find((item) => item.id === id && !item.isDeleted),
  )
  const softDeletePost = usePostStore((state) => state.softDeletePost)
  const navigate = useNavigate()

  if (!post) {
    return (
      <PageLayout title="Post Detail">
        <p>Post not found.</p>
      </PageLayout>
    )
  }

  const handleDelete = () => {
    softDeletePost(post.id)
    window.alert('Post moved to trash.')
    navigate('/trash')
  }

  return (
    <PageLayout title="Post Detail">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p>
        <Link to={`/posts/${post.id}/edit`}>Edit</Link>
      </p>
      <p>
        <button type="button" onClick={handleDelete}>
          Delete
        </button>
      </p>
    </PageLayout>
  )
}
