export function formatDate(iso: string) {
const d = new Date(iso)
return d.toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' })
}


export function excerpt(text: string, len = 100) {
if (text.length <= len) return text
return text.slice(0, len).trimEnd() + '…'
}