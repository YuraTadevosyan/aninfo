'use server'

export const fetchAnime = async (page) => {
	const response = await fetch(`https://api.jikan.moe/v4/anime?page=${page}`)
	
	return await response.json()
}

export const fetchAnimeById = async (id) => {
	const response = await fetch(`https://api.jikan.moe/v4/anime/${id}/full`)
	
	return await response.json()
}

export const fetchEpisodes = async (page, id) => {
	const response = await fetch(`https://api.jikan.moe/v4/anime/${id}/episodes?page=${page}`)
	
	return await response.json()
}
