import Image from "next/image";

function Header() {
	return (
		<header className="container mx-auto py-16 flex justify-center lg:items-center max-lg:flex-col w-full sm:gap-16 gap-0">
			<div className="flex-1 flex flex-col gap-10">
				<Image
					src="/logo.webp"
					alt="logo"
					width={101}
					height={101}
					className="object-contain"
				/>
				<h1 className="sm:text-6xl text-5xl text-white lg:max-w-lg font-bold leading-[120%]">
					Explore The <span className="red-gradient">Diverse Realms</span> of
					Anime Magic
				</h1>
			</div>
			<div className="lg:flex-1 relative w-full h-[50vh] justify-center">
				<Image src="/hero.webp" alt="anime" fill className="object-contain" />
			</div>
		</header>
	);
}

export default Header;
