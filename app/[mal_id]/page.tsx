import Image from 'next/image'
import Link from 'next/link'
import { data } from '../data'

// Components
import { AnimeEpisodes, MotionDiv } from '@/components'

// Action
import { fetchAnimeById } from '../action'

// Types
import { AnimeProp } from '@/components/AnimeCard/types'

const variants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 },
}

export default async function Anime({ params: { mal_id } }) {
	
	const { data: anime } = await fetchAnimeById(mal_id)
	
  return (
		<div className="flex flex-col h-full w-full py-24 flex-1">
			<div className="flex">
				<MotionDiv
					variants={variants}
					initial="hidden"
					animate="visible"
					transition={{
						delay: 0.25,
						ease: 'easeInOut',
						duration: 0.5
					}}
					viewport={{ amount: 0 }}
					className="relative h-auto w-full max-w-[450px] max-h-[calc(450px_*_1.6)]"
				>
					<Image
						alt="Main Anime image"
						fill
						src={anime.images.webp.large_image_url}
						className="rounded-lg"
					/>
				</MotionDiv>
				
				<MotionDiv
					variants={variants}
				 	initial="hidden"
				 	animate="visible"
					transition={{
						delay: 0.25,
						ease: 'easeInOut',
						duration: 0.5
					}}
					viewport={{ amount: 0 }}
					className="flex flex-col w-full px-10"
				>
					<h2 className="text-2xl uppercase racking-wider">{anime.studios[0].name} Studio</h2>
					
					<h1 className="text-5xl pt-3 pb-4 font-bold">{anime.title} {!!anime.title_english && `(${anime.title_english})`}</h1>
					
					<div className="flex flex-row gap-2 items-center pb-8">
						<div className="flex flex-row gap-2 items-center">
							<Image
								src="./icons/star.svg"
								alt="star"
								width={20}
								height={20}
								className="object-contain"
							/>
							<p className="text-xl font-bold text-[#FFAD49]">{anime.score}</p>
						</div>
						
						<div className="mx-4 flex flex-row gap-2 items-center">
							<Image
								src="./icons/scoredBy.svg"
								alt="star"
								width={20}
								height={20}
								className="object-contain"
							/>
							<p className="text-xl font-bold text-cyan-500">{anime.scored_by}</p>
						</div>
						
						<div className="flex flex-row gap-2 items-center">
							<Image
								src="./icons/rank.svg"
								alt="star"
								width={20}
								height={20}
								className="object-contain"
							/>
							<p className="text-xl font-bold text-violet-400">{anime.rank}</p>
						</div>
					</div>
					
					<p className="text-lg text-justify">{anime.synopsis}</p>
					
					<div className="flex flex-col justify-between pt-6 text-lg">
						<div className="flex py-2">
							<div className="w-full max-w-[50%] font-bold">
								Type
							</div>
							<div className="w-full max-w-[50%] text-slate-200">
								{anime.type}
							</div>
						</div>
						
						<div className="flex py-2">
							<div className="w-full max-w-[50%] font-bold">
								Source
							</div>
							<div className="w-full max-w-[50%] text-slate-200">
								{anime.source}
							</div>
						</div>
						
						<div className="flex py-2">
							<div className="w-full max-w-[50%] font-bold">
								Episodes
							</div>
							<div className="w-full max-w-[50%] text-slate-200">
								{anime.episodes}
							</div>
						</div>
						
						<div className="flex py-2">
							<div className="w-full max-w-[50%] font-bold">
								Duration
							</div>
							<div className="w-full max-w-[50%] text-slate-200">
								{anime.duration}
							</div>
						</div>
						
						<div className="flex py-2">
							<div className="w-full max-w-[50%] font-bold">
								Status
							</div>
							<div className="w-full max-w-[50%] text-slate-200">
								{anime.status}
							</div>
						</div>
						
						<div className="flex py-2">
							<div className="w-full max-w-[50%] font-bold">
								Genres
							</div>
							<div className="w-full max-w-[50%] text-slate-200">
								{anime.genres.map((genre, index) =>
									<Link className="text-red-600 mr-2" href={genre.url} key={genre.mal_id} target="_blank">
										{genre.name}{anime.genres.length !== index + 1 && ','}
									</Link>
								)}
							</div>
						</div>
						
						<div className="flex py-2">
							<div className="w-full max-w-[50%] font-bold">
								Rating
							</div>
							<div className="w-full max-w-[50%] text-slate-200">
								{anime.rating}
							</div>
						</div>
						
						<div className="flex py-2">
							<div className="w-full max-w-[50%] font-bold">
								Demographics
							</div>
							<div className="w-full max-w-[50%] text-slate-200">
								{!anime.demographics.length ? 'Not Found' : (
									anime.demographics.map((demographic, index) =>
										<Link className="text-red-600 mr-2" href={demographic.url} key={demographic.mal_id} target="_blank">
											{demographic.name}{anime.demographics.length - 1 !== index && ','}
										</Link>
									))}
							</div>
						</div>
						
						<div className="flex py-2">
							<div className="w-full max-w-[50%] font-bold">
								Producers
							</div>
							<div className="w-full max-w-[50%] text-slate-200">
								{anime.producers.map((producer, index) =>
									<Link className="text-red-600 mr-2" href={producer.url} key={producer.mal_id} target="_blank">
										{producer.name}{anime.producers.length - 1 !== index && ','}
									</Link>
								)}
							</div>
						</div>
					</div>
				</MotionDiv>
			</div>
			
			{anime.episodes > 1 && (
				<MotionDiv className="flex flex-col">
					<h3 className="text-3xl mb-8 mt-10">Episodes</h3>
					
					<AnimeEpisodes mal_id={anime.mal_id}/>
				</MotionDiv>
			)}
		</div>
	)
}
