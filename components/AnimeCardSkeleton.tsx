import Image from 'next/image'

const AnimeCardSkeleton = () => {
	return (
		<div role="status" className="block w-sm rounded relative w-full animate-pulse">
			<div className="relative w-full h-[37vh] bg-gray-700 rounded-xl"/>
			
			<div className="py-4 flex flex-col gap-3">
				<span className="h-2 text-xl bg-gray-700 w-full rounded-full max-w-[50%]"/>
				<div className="py-1 px-2 bg-gray-700 rounded-full">
					<p className="h-2 text-white text-sm font-bold capitalize">
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
					<p className="h-2 w-[40px] bg-gray-700 rounded-xl" />
				</div>
				<div className="flex flex-row gap-2 items-center">
					<Image
						src="./icons/star.svg"
						alt="star"
						width={18}
						height={18}
						className="object-contain"
					/>
					<p className="h-2 w-[40px] bg-gray-700 rounded-xl" />
				</div>
			</div>
			<span className="sr-only">Loading...</span>
		</div>
	)
}

export default AnimeCardSkeleton
