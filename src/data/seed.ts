import type { Post } from '../types'


export const seedPosts: Post[] = [
{
id: 'p1',
title: 'Hướng dẫn React Router v6 cho người mới bắt đầu',
author: 'Nguyễn Văn A',
thumbnailUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
content:
'React Router v6 mang lại API gọn nhẹ và mạnh mẽ. Bài viết này giới thiệu các khái niệm cơ bản như Routes, Route, useNavigate, useParams, NavLink và cách tổ chức cấu trúc dự án…',
category: 'Công nghệ',
createdAt: new Date().toISOString(),
},
{
id: 'p2',
title: 'Đà Lạt 3N2Đ tự túc: lịch trình và chi phí chi tiết',
author: 'Trần B',
thumbnailUrl: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=1200&auto=format&fit=crop',
content:
'Đà Lạt luôn là điểm đến hấp dẫn. Bài viết chia sẻ lịch trình 3N2Đ tự túc, những quán cà phê đẹp, địa điểm check-in, mẹo đặt phòng và tính toán chi phí…',
category: 'Du lịch',
createdAt: new Date().toISOString(),
},
{
id: 'p3',
title: 'Bí quyết nấu phở bò đậm đà tại nhà',
author: 'Lê C',
thumbnailUrl: 'https://tse1.mm.bing.net/th/id/OIP.i6tfyHRuCya7MtrSwAgwWwHaEK?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3&fit=crop',
content:
'Phở bò là món ăn quốc dân. Bài viết hướng dẫn cách ninh xương, nêm nếm gia vị, xử lý mùi bò, và bảo quản nước dùng trong tủ lạnh để dùng nhiều lần…',
category: 'Ẩm thực',
createdAt: new Date().toISOString(),
},
{
id: 'p4',
title: '5 thói quen nhỏ giúp cải thiện sức khỏe tinh thần',
author: 'Phạm D',
thumbnailUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop',
content:
'Giấc ngủ đủ, tập thể dục nhẹ, thiền 5 phút, ghi nhật ký cảm ơn, hạn chế mạng xã hội – những thói quen nhỏ nhưng mang lại tác động lớn tới sức khỏe tinh thần…',
category: 'Đời sống',
createdAt: new Date().toISOString(),
},
{
id: 'p5',
title: 'Tối ưu hóa hiệu suất web: từ Lighthouse tới thực thi',
author: 'Vũ E',
thumbnailUrl: 'https://images.unsplash.com/photo-1472437774355-71ab6752b434?q=80&w=1200&auto=format&fit=crop',
content:
'Hiệu suất web ảnh hưởng trực tiếp đến chuyển đổi. Bài viết đi qua tối ưu ảnh, lazy loading, code splitting, và đo lường bằng Lighthouse & Web Vitals…',
category: 'Công nghệ',
createdAt: new Date().toISOString(),
},
]