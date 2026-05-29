import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type Post = {
  id: string
  title: string
  content: string
  isDeleted: boolean
}

type PostStore = {
  posts: Post[]
  addPost: (post: Post) => void
  updatePost: (id: string, values: Pick<Post, 'title' | 'content'>) => void
  softDeletePost: (id: string) => void
  recoverPost: (id: string) => void
  removePost: (id: string) => void
}

export const usePostStore = create<PostStore>()(
  persist(
    (set) => ({
      posts: [],
      addPost: (post) =>
        set((state) => ({
          posts: [...state.posts, post],
        })),
      updatePost: (id, values) =>
        set((state) => ({
          posts: state.posts.map((post) =>
            post.id === id ? { ...post, ...values } : post,
          ),
        })),
      softDeletePost: (id) =>
        set((state) => ({
          posts: state.posts.map((post) =>
            post.id === id ? { ...post, isDeleted: true } : post,
          ),
        })),
      recoverPost: (id) =>
        set((state) => ({
          posts: state.posts.map((post) =>
            post.id === id ? { ...post, isDeleted: false } : post,
          ),
        })),
      removePost: (id) =>
        set((state) => ({
          posts: state.posts.filter((post) => post.id !== id),
        })),
    }),
    {
      name: 'post-store',
    },
  ),
)
