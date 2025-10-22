import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/NavBar'
import PostList from './pages/PostList'
import CreatePost from './pages/CreatePost'
import PostDetail from './pages/PostDetail'
import EditPost from './pages/EditPost'


export default function App() {
return (
<div className="container">
<Navbar />
<main>
<Routes>
<Route path="/" element={<Navigate to="/posts" replace />} />
<Route path="/posts" element={<PostList />} />
<Route path="/create" element={<CreatePost />} />
<Route path="/posts/create" element={<CreatePost />} />
<Route path="/posts/:id" element={<PostDetail />} />
<Route path="/posts/edit/:id" element={<EditPost />} />
<Route path="*" element={<div>404 Not Found</div>} />
</Routes>
</main>
</div>
)
}