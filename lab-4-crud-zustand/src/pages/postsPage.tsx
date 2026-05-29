import { Link } from 'react-router'
import { PageLayout } from '../layouts/page.layout'
import { usePostStore } from '../post.store'

export function PostsPage() {
  const posts = usePostStore((state) => state.posts)
  const visiblePosts = posts.filter((post) => !post.isDeleted)

  return (
    <PageLayout title="Posts">
      <p>
        <Link to="/posts/new">Create</Link>
      </p>
      {visiblePosts.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        <ul>
          {visiblePosts.map((post) => (
            <li key={post.id}>
              <Link to={`/posts/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </PageLayout>
  )
}
