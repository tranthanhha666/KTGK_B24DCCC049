import { useNavigate, useParams } from 'react-router-dom'
import { usePosts } from '../context/PostsContext'
import PostForm from '../components/PostForm'
import type { PostFormValues } from '../components/PostForm'


export default function EditPost() {
const { id } = useParams()
const navigate = useNavigate()
const { getById, update } = usePosts()
const post = id ? getById(id) : undefined


if (!post) return <div>Không tìm thấy bài viết.</div>


const handleSubmit = (values: PostFormValues) => {
update(post.id, values)
alert('Cập nhật thành công!')
navigate(`/posts/${post.id}`)
}


const handleCancel = () => navigate(`/posts/${post.id}`)


return <PostForm mode="edit" initial={post} onSubmit={handleSubmit} onCancel={handleCancel} />
}