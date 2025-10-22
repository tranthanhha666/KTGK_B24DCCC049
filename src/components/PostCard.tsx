import { Link, useNavigate } from 'react-router-dom'
import type { Post } from '../types'
import { excerpt, formatDate } from '../utils/format'


export default function PostCard({ post, onDelete }: { post: Post; onDelete: (id: string) => void }) {
const navigate = useNavigate()
const handleDelete = () => {
if (confirm('Bạn có chắc muốn xóa bài viết này?')) onDelete(post.id)
}
return (
<div className="card">
<img src={post.thumbnailUrl} alt={post.title} onError={(e) => ((e.currentTarget.src = '/logo.svg'))} />
<div className="card-body">
<div className="card-title">{post.title}</div>
<div className="card-meta">{post.author} • {formatDate(post.createdAt)} • {post.category}</div>
<p style={{margin: '8px 0 0'}}>{excerpt(post.content, 100)}</p>
<div className="card-actions">
<Link className="btn" to={`/posts/${post.id}`}>Đọc thêm</Link>
<button className="btn ghost" onClick={() => navigate(`/posts/edit/${post.id}`)}>Sửa</button>
<button className="btn danger" onClick={handleDelete}>Xóa</button>
</div>
</div>
</div>
)
}