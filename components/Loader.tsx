'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'

interface Prop {
	page: number
	onPage: (page: number) => void
}

function LoadMore ({ page, onPage}: Prop) {
	const { ref, inView } = useInView()
	
	useEffect(() => {
		if (inView) {
			onPage(page + 1)
		}
	}, [inView])
	
	return (
		<>
			<section className="flex justify-center items-center w-full">
				<div ref={ref}>
					<Image
						src="./icons/spinner.svg"
						alt="spinner"
						width={56}
						height={56}
						className="object-contain"
					/>
				</div>
			</section>
		</>
	)
}

export default LoadMore
