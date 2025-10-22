import { useMemo, useState } from 'react'
import { usePosts } from '../context/PostsContext'
import PostCard from '../components/PostCard'
import { Link } from 'react-router-dom'


export default function PostList() {
const { posts, remove } = usePosts()
const [q, setQ] = useState('')


const filtered = useMemo(() => {
const query = q.trim().toLowerCase()
if (!query) return posts
return posts.filter(p => p.title.toLowerCase().includes(query))
}, [posts, q])


return (
<div>
<div className="header-row">
<h2 style={{margin:0}}>Danh sách bài viết</h2>
<span style={{color:'var(--muted)'}}>Tổng: {filtered.length}</span>
<div className="spacer"></div>
<input className="input" placeholder="Lọc theo tiêu đề…" value={q} onChange={(e)=>setQ(e.target.value)} style={{maxWidth: 320}} />
<Link to="/create" className="btn primary">Viết bài mới</Link>
</div>


<div className="grid">
{filtered.map(p => (
<PostCard key={p.id} post={p} onDelete={remove} />
))}
</div>
</div>
)
}