import Image from 'next/image'

function Footer() {
	return (
		<footer className="w-full bottom-0 fixed flex justify-center bg-[#000000e6] sm:px-16 py-4 px-8">
			<div className="container flex justify-between items-center gap-2 flex-wrap ">
				<p className="text-base font-bold text-white">@{new Date().getFullYear()} AnInfo</p>
				<Image
					src="/logo.webp"
					alt="logo"
					width={50}
					height={50}
					className="object-contain"
				/>
				<div className="flex items-center gap-6">
					<Image
						src="./icons/tiktok.svg"
						alt="logo"
						width={19}
						height={19}
						className="object-contain"
					/>
					<Image
						src="./icons/instagram.svg"
						alt="logo"
						width={19}
						height={19}
						className="object-contain"
					/>
					<Image
						src="./icons/twitter.svg"
						alt="logo"
						width={19}
						height={19}
						className="object-contain"
					/>
				</div>
			</div>
		</footer>
	)
}

export default Footer
