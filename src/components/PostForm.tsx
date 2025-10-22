import React, { useEffect, useMemo, useState } from 'react'
import type { Category, Post } from '../types'

export type PostFormValues = Omit<Post, 'id' | 'createdAt'>

const categories: Category[] = ['Công nghệ', 'Du lịch', 'Ẩm thực', 'Đời sống', 'Khác']

export default function PostForm({
	mode,
	initial,
	onSubmit,
	onCancel,
}: {
	mode: 'create' | 'edit'
	initial?: Post
	onSubmit: (values: PostFormValues) => void
	onCancel: () => void
}) {
	const [values, setValues] = useState<PostFormValues>({
		title: '',
		author: '',
		thumbnailUrl: '',
		content: '',
		category: 'Công nghệ',
	})
	const [errors, setErrors] = useState<Record<string, string>>({})

	useEffect(() => {
		if (initial) {
			setValues({
				title: initial.title,
				author: initial.author,
				thumbnailUrl: initial.thumbnailUrl,
				content: initial.content,
				category: initial.category,
			})
		}
	}, [initial])

	const validate = useMemo(
		() => (vals: PostFormValues) => {
			const e: Record<string, string> = {}
			if (!vals.title || vals.title.trim().length < 10) e.title = 'Tiêu đề bắt buộc, ít nhất 10 ký tự.'
			if (!vals.author || vals.author.trim().length < 3) e.author = 'Tác giả bắt buộc, ít nhất 3 ký tự.'
			if (!vals.content || vals.content.trim().length < 50) e.content = 'Nội dung bắt buộc, ít nhất 50 ký tự.'
			return e
		},
		[]
	)

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		const eobj = validate(values)
		setErrors(eobj)
		if (Object.keys(eobj).length === 0) onSubmit(values)
	}

	const set = (k: keyof PostFormValues) => (
		ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
	) => setValues({ ...values, [k]: ev.target.value } as PostFormValues)

	return (
		<form onSubmit={handleSubmit} className="article">
			<h2 style={{ marginTop: 0 }}>{mode === 'create' ? 'Tạo bài viết mới' : 'Chỉnh sửa bài viết'}</h2>

			<div className="field">
				<label className="label">Tiêu đề *</label>
				<input className="input" value={values.title} onChange={set('title')} placeholder="Ít nhất 10 ký tự" />
				{errors.title && <div className="error">{errors.title}</div>}
			</div>

			<div className="field">
				<label className="label">Tác giả *</label>
				<input className="input" value={values.author} onChange={set('author')} placeholder="Ít nhất 3 ký tự" />
				{errors.author && <div className="error">{errors.author}</div>}
			</div>

			<div className="field">
				<label className="label">URL ảnh thumbnail</label>
				<input className="input" value={values.thumbnailUrl} onChange={set('thumbnailUrl')} placeholder="https://…" />
			</div>

			<div className="field">
				<label className="label">Thể loại</label>
				<select className="select" value={values.category} onChange={set('category')}>
					{categories.map((c) => (
						<option key={c} value={c}>
							{c}
						</option>
					))}
				</select>
			</div>

			<div className="field">
				<label className="label">Nội dung *</label>
				<textarea className="textarea" value={values.content} onChange={set('content')} placeholder="Ít nhất 50 ký tự" rows={10} />
				{errors.content && <div className="error">{errors.content}</div>}
			</div>

			<div className="card-actions" style={{ justifyContent: 'flex-end' }}>
				<button type="button" className="btn ghost" onClick={onCancel}>
					Hủy
				</button>
				<button type="submit" className="btn primary">
					{mode === 'create' ? 'Đăng bài' : 'Cập nhật'}
				</button>
			</div>
		</form>
	)
}