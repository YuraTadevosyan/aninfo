'use client'
import { useState, useEffect } from 'react'
import { data } from './data'

// Components
import { AnimeCard, Loader, Skeleton } from '@/components'

// Action
import { fetchAnime } from './action'

// Types
import { AnimeProp } from '@/components/AnimeCard/types'

export default function Home() {
	const [loading, setLoading] = useState<boolean>(true);
	const [page, setPage] = useState<number>(1)
	const [hasNextPage, setHasNextPage] = useState<boolean>(true)
	const [data, setData] = useState<AnimeProp[]>([])
	
	useEffect(() => {
		const fetchAnimes = async () => {
			setLoading(true)
			const { data: animeData, pagination } = await fetchAnime(page)
			setHasNextPage(pagination?.has_next_page)
			
			setTimeout(() => {
				setData([...data, ...(animeData || [])])
				setLoading(false)
			}, 2000)
		}
		
		fetchAnimes()
	}, [page]);
	
  return (
		<div className="w-full flex flex-col place-items-center">
			<h2 className="text-3xl text-white font-bold">Explore Anime</h2>
			
			<section className="w-full grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 my-10">
				{data.map((item: AnimeProp, index) => <AnimeCard key={index} anime={item} delayIndex={Math.floor(index - (page - 1) * 25)}/> )}
				{loading && Array.from(Array(25)).map((el, index) => <Skeleton key={index} />)}
			</section>
			
			{hasNextPage && !loading && <Loader page={page} onPage={setPage}/>}
		</div>
	)
}
