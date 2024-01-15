'use server'

export const fetchAnime = async (page) => {
	const response = await fetch(`https://api.jikan.moe/v4/anime?page=${page}`)
	
	return await response.json()
}
