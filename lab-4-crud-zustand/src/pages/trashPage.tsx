import { PageLayout } from '../layouts/page.layout'
import { usePostStore } from '../post.store'

export function TrashPage() {
  const posts = usePostStore((state) => state.posts)
  const deletedPosts = posts.filter((post) => post.isDeleted)
  const recoverPost = usePostStore((state) => state.recoverPost)
  const removePost = usePostStore((state) => state.removePost)

  const handleRecover = (id: string) => {
    recoverPost(id)
    window.alert('Post recovered.')
  }

  const handlePermanentDelete = (id: string) => {
    removePost(id)
  }

  return (
    <PageLayout title="Trash">
      {deletedPosts.length === 0 ? (
        <p>No deleted posts.</p>
      ) : (
        <ul>
          {deletedPosts.map((post) => (
            <li key={post.id}>
              <p>{post.title}</p>
              <button type="button" onClick={() => handleRecover(post.id)}>
                Recover
              </button>{' '}
              <button
                type="button"
                onClick={() => handlePermanentDelete(post.id)}
              >
                Delete permanently
              </button>
            </li>
          ))}
        </ul>
      )}
    </PageLayout>
  )
}
