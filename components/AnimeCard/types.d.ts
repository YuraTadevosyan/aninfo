export interface AnimeProp {
	mal_id: number
	url: string
	images: {
		jpg: IAnimePropImage
		webp: IAnimePropImage
	}
	trailer: {
		youtube_id: string
		url: string
		embed_url: string
		images: {
			image_url: string
			small_image_url: string
			medium_image_url: string
			large_image_url: string
			maximum_image_url: string
		}
	}
	approved: boolean
	titles: IAnimePropTitle[]
	title: string
	title_english: string
	title_japanese: string
	title_synonyms: string[]
	type: string
	source: string
	episodes: number
	status: string
	airing: boolean
	aired: {
		from: string
		to: string
		prop: {
			from: {
				day: number
				month: number
				year: number
			}
			to: {
				day: number
				month: number
				year: number
			}
		}
		string: string
	}
	duration: string
	rating: string
	score: number
	scored_by: number
	rank: number
	popularity: number
	members: number
	favorites: number
	synopsis: string
	background: string
	season: string
	year: number
	broadcast: {
		day: string
		time: string
		timezone: string
		string: string
	}
	producers: IAnimePropData[]
	licensors: IAnimePropData[]
	studios: IAnimePropData[]
	genres: IAnimePropData[]
	explicit_genres: IAnimePropData
	themes: IAnimePropData[]
	demographics: IAnimePropData[]
}

interface IAnimePropData {
	mal_id: number
	type: string
	name: string
	url: string
}

interface IAnimePropImage {
	image_url: string
	small_image_url: string
	large_image_url: string
}

interface IAnimePropTitle {
	type: string
	title: strin
}
