export function toQueryString(params?: Record<string, unknown>): string {
	if (!params) return ''
	const searchParams = new URLSearchParams()

	Object.entries(params).forEach(([key, value]) => {
		if (value === undefined || value === null || value === '') return

		if (Array.isArray(value)) {
			searchParams.append(key, value.join(','))
		} else {
			searchParams.append(key, String(value))
		}
	})

	const query = searchParams.toString()
	return query ? `?${query}` : ''
}