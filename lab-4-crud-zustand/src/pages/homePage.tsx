import { Link } from 'react-router'
import { PageLayout } from '../layouts/page.layout'

export function HomePage() {
  return (
    <PageLayout title="Blog App">
      <p>
        <Link to="/posts">Go to posts</Link>
      </p>
    </PageLayout>
  )
}
