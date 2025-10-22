import { useNavigate, useParams, Link } from 'react-router-dom'
import { usePosts } from '../context/PostsContext'
import { formatDate } from '../utils/format'


export default function PostDetail() {
const { id } = useParams()
const { getById, remove } = usePosts()
const navigate = useNavigate()
const post = id ? getById(id) : undefined


if (!post) return <div>Không tìm thấy bài viết.</div>


const handleDelete = () => {
if (confirm('Bạn có chắc muốn xóa bài viết này?')) {
remove(post.id)
navigate('/posts')
}
}


return (
<article className="article">
<div className="article-header">
<img src={post.thumbnailUrl || '/logo.svg'} alt={post.title} onError={(e)=> (e.currentTarget.src='/logo.svg')} />
<div>
<h1>{post.title}</h1>
<div className="meta">{post.author} • {formatDate(post.createdAt)} • {post.category}</div>
<div className="card-actions">
<button className="btn" onClick={() => navigate(-1)}>Quay lại</button>
<Link className="btn" to={`/posts/edit/${post.id}`}>Chỉnh sửa</Link>
<button className="btn danger" onClick={handleDelete}>Xóa bài viết</button>
</div>
</div>
</div>


<div className="content" style={{marginTop: 14}}>{post.content}</div>
</article>
)
}