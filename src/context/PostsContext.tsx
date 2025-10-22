import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import type { Post } from '../types'
import { seedPosts } from '../data/seed'

type PostsContextValue = {
	posts: Post[]
	create: (p: Omit<Post, 'id' | 'createdAt'>) => Post
	update: (id: string, p: Partial<Omit<Post, 'id' | 'createdAt'>>) => Post | undefined
	remove: (id: string) => void
	getById: (id: string) => Post | undefined
}

const PostsContext = createContext<PostsContextValue | undefined>(undefined)
const LS_KEY = 'blog_posts_v1'

function loadFromLS(): Post[] | null {
	try {
		const raw = localStorage.getItem(LS_KEY)
		return raw ? (JSON.parse(raw) as Post[]) : null
	} catch {
		return null
	}
}

function saveToLS(posts: Post[]) {
	localStorage.setItem(LS_KEY, JSON.stringify(posts))
}

export function PostsProvider({ children }: { children: React.ReactNode }) {
	const [posts, setPosts] = useState<Post[]>(() => loadFromLS() ?? seedPosts)

	useEffect(() => {
		saveToLS(posts)
	}, [posts])

	const api = useMemo<PostsContextValue>(() => ({
		posts,
		create: (p) => {
			const newPost: Post = {
				...p,
				id: String(Date.now()),
				createdAt: new Date().toISOString(),
			}
			setPosts((prev) => [newPost, ...prev])
			return newPost
		},
		update: (id, p) => {
			let updated: Post | undefined
			setPosts((prev) =>
				prev.map((item) => {
					if (item.id === id) {
						updated = { ...item, ...p }
						return updated
					}
					return item
				})
			)
			return updated
		},
		remove: (id) => setPosts((prev) => prev.filter((x) => x.id !== id)),
		getById: (id) => posts.find((p) => p.id === id),
	}), [posts])

	return <PostsContext.Provider value={api}>{children}</PostsContext.Provider>
}

export function usePosts() {
	const ctx = useContext(PostsContext)
	if (!ctx) throw new Error('usePosts must be used within PostsProvider')
	return ctx
}