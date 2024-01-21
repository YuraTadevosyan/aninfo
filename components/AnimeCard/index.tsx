import Image from 'next/image'

// Components
import { MotionDiv } from '@/components'

// Types
import { AnimeProp } from './types'

interface Prop {
	anime: AnimeProp
	delayIndex: number
	onClick: () => void
}

const variants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 },
}

const AnimeCard = ({ anime, delayIndex, onClick }: Prop) => {
	return (
		<MotionDiv
			variants={variants}
			initial="hidden"
			animate="visible"
			transition={{
				delay: delayIndex * 0.25,
				ease: 'easeInOut',
				duration: 0.5
			}}
			viewport={{ amount: 0 }}
			className="max-w-sm rounded relative w-full cursor-pointer"
			onClick={onClick}
		>
			<div className="relative w-full h-[37vh]">
				<Image
					src={anime.images.webp.large_image_url}
					alt={anime.title}
					fill
					className="rounded-xl w-auto h-auto"
				/>
			</div>
			<div className="py-4 flex flex-col gap-3">
				<div className="flex justify-between items-center gap-1">
					<h2 className="font-bold text-white text-xl line-clamp-1 w-full">
						{anime.title}
					</h2>
					<div className="py-1 px-2 bg-[#161921] rounded-sm">
						<p className="text-white text-sm font-bold capitalize">
							{anime.type}
						</p>
					</div>
				</div>
				<div className="flex gap-4 items-center">
					<div className="flex flex-row gap-2 items-center">
						<Image
							src="./icons/episodes.svg"
							alt="episodes"
							width={20}
							height={20}
							className="object-contain"
						/>
						<p className="text-base text-white font-bold">
							{anime.episodes || 'Ongoing'}
						</p>
					</div>
					<div className="flex flex-row gap-2 items-center">
						<Image
							src="./icons/star.svg"
							alt="star"
							width={18}
							height={18}
							className="object-contain"
						/>
						<p className="text-base font-bold text-[#FFAD49]">{anime.score}</p>
					</div>
				</div>
			</div>
		</MotionDiv>
	)
}

export default AnimeCard
