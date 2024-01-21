'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import moment from 'moment'

import { fetchEpisodes } from '@/app/action'

// Components
import { AnimeEpisodeSkeleton, Loader } from '@/components'

// Types
import { Prop, AnimeEpisodeProp } from './types'

const AnimeEpisodes = ({ mal_id }: Prop) => {
	const [loading, setLoading] = useState<boolean>(true)
	const [page, setPage] = useState<number>(1)
	const [hasNextPage, setHasNextPage] = useState<boolean>(true)
	const [data, setData] = useState<AnimeEpisodeProp[]>([])
	
	useEffect(() => {
		const fetchAnimes = async () => {
			setLoading(true)
			const { data: animeData, pagination } = await fetchEpisodes(page, mal_id)
			setHasNextPage(pagination?.has_next_page)
			
			setTimeout(() => {
				setData([...data, ...(animeData || [])])
				setLoading(false)
			}, 2000)
		}
		
		fetchAnimes()
	}, [page])
	
  return (
		<>
			<section className="w-full grid grid-cols-1 gap-10">
				<div className="flex justify-between w-full rounded w-full bg-slate-950 p-4 px-2">
					<div className="flex w-full max-w-[25%] h-[20px] px-2 border-r border-white">
						<span className="w-full max-w-[20px]">#</span>
						
						<span className="block w-full max-w-[calc(100%_-_20px)] ml-5 text-center">
							<span className="-ml-8">Episode Title</span>
						</span>
					</div>
					
					<div className="flex w-full max-w-[25%] h-[20px] px-2 border-r border-white">
						<span className="block w-full text-center">
							Episode Romanji Title
						</span>
					</div>
					
					<div className="flex w-full max-w-[25%] h-[20px] px-2 border-r border-white">
						<span className="block w-full text-center">
							Episode Date
						</span>
					</div>
					
					<div className="flex w-full max-w-[25%] h-[20px] px-2">
						<span className="block w-full text-center">
							Episode URL
						</span>
					</div>
				</div>
				
				{data.map((item: AnimeEpisodeProp, index) =>
					<div key={index} className="flex justify-between w-full rounded w-full px-2">
						<div className="flex w-full max-w-[25%] h-[20px] px-2 border-r border-white">
							<span className="w-full max-w-[20px]">#{item.mal_id}</span>
							
							<span className="block w-full max-w-[calc(100%_-_20px)] ml-5">
								{item.title}
							</span>
						</div>
						
						<div className="flex w-full max-w-[25%] h-[20px] px-2 border-r border-white">
							<span className="block w-full">
								{item.title_romanji}
							</span>
						</div>
						
						<div className="flex w-full max-w-[25%] h-[20px] px-2 border-r border-white">
							<span className="block w-full text-center">
								{moment(item.aired).format('MMMM Do, YYYY')}
							</span>
						</div>
						
						<div className="flex w-full max-w-[25%] h-[20px] px-2">
							{item.url ? (
								<Link href={item.url} className="block w-full text-red-600 break-all" target="_blank">
									{item.url}
								</Link>
							) : (
								<span className="block w-full text-center">Not Found</span>
							)}
						</div>
					</div>
				)}
				{loading && Array.from(Array(5)).map((el, index) => <AnimeEpisodeSkeleton key={index}/>)}
			</section>
			
			{hasNextPage && !loading && <Loader page={page} onPage={setPage}/>}
		</>
	)
}

export default AnimeEpisodes
