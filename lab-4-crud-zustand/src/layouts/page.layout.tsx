import type { ReactNode } from 'react'
import { Link } from 'react-router'

type PageLayoutProps = {
  title: string
  children: ReactNode
}

export function PageLayout({ title, children }: PageLayoutProps) {
  return (
    <main>
      <nav>
        <Link to="/">Home</Link> | <Link to="/posts">Posts</Link> |{' '}
        <Link to="/trash">Trash</Link>
      </nav>
      <h1>{title}</h1>
      {children}
    </main>
  )
}
