import { BrowserRouter } from 'react-router'
import { Route, Routes } from 'react-router'
import { EditPostPage } from './pages/editPostPage'
import { HomePage } from './pages/homePage'
import { NavigatePage } from './pages/navigatePage'
import { NewPostPage } from './pages/newPostPage'
import { PostDetailPage } from './pages/postDetailPage'
import { PostsPage } from './pages/postsPage'
import { TrashPage } from './pages/trashPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/posts/new" element={<NewPostPage />} />
        <Route path="/posts/:id" element={<PostDetailPage />} />
        <Route path="/posts/:id/edit" element={<EditPostPage />} />
        <Route path="/trash" element={<TrashPage />} />
        <Route path="*" element={<NavigatePage />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
