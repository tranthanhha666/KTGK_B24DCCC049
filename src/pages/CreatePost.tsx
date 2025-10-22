import { useNavigate } from 'react-router-dom'
import PostForm from '../components/PostForm'
import type { PostFormValues } from '../components/PostForm'
import { usePosts } from '../context/PostsContext'


export default function CreatePost() {
const navigate = useNavigate()
const { create } = usePosts()


const handleSubmit = (values: PostFormValues) => {
create(values)
alert('Đăng bài thành công!')
navigate('/posts')
}


return <PostForm mode="create" onSubmit={handleSubmit} onCancel={() => navigate('/posts')} />
}