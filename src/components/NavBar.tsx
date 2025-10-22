import { NavLink, useNavigate } from 'react-router-dom'


export default function Navbar() {
const navigate = useNavigate()
return (
<nav className="navbar">
<div className="brand">📝 Blog Management</div>
<NavLink to="/posts" className={({ isActive }) => `navlink ${isActive ? 'active' : ''}`}>
Trang chủ
</NavLink>
<div className="spacer" />
<button className="btn primary" onClick={() => navigate('/create')}>Viết bài mới</button>
</nav>
)
}