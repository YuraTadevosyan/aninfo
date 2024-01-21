import Image from 'next/image'

const AnimeEpisodeSkeleton = () => {
	return (
		<div role="status" className="flex justify-between w-full rounded w-full animate-pulse px-2">
			<div className="flex w-full max-w-[25%] h-[20px] px-2 border-r border-white">
				<span className="bg-gray-700 w-full rounded-lg max-w-[10px]"/>
				
				<span className="block bg-gray-700 w-[calc(100%_-_20px)] ml-2 rounded-lg"/>
			</div>
			
			<div className="flex w-full max-w-[25%] h-[20px] px-2	border-r border-white">
				<span className="block bg-gray-700 w-full rounded-lg"/>
			</div>
			
			<div className="flex w-full max-w-[25%] h-[20px] px-2 border-r border-white">
				<span className="block bg-gray-700 w-full rounded-lg"/>
			</div>
			
			
			<div className="flex w-full max-w-[25%] h-[20px] px-2">
				<span className="block bg-gray-700 w-full rounded-lg"/>
			</div>
			
			<span className="sr-only">Loading...</span>
		</div>
	)
}

export default AnimeEpisodeSkeleton
