const API ='58253e4ac18b9d7ff47356fcc1a40f01';

const requests = {
	fetchTrending: `/trending/all/week?api_key=${API}&language=en-US`,
	fetchNetflixOriginals: `/discover/tv?api_key=${API}&with_network=123`,
	fetchTopRated: `/movie/top_rated?api_key=${API}&language=en-US`,
	fetchActionMovies: `/discover/movie?api_key=${API}&with_genres=28`,
	fetchComedyMovies: `/discover/movie?api_key=${API}&with_genres=35`,
	fetchHorrorMovies: `/discover/movie?api_key=${API}&with_genres=27`,
	fetchRomanceMovies: `/discover/movie?api_key=${API}&with_genres=10749`,
	fetchDocumentaries: `/discover/movie?api_key=${API}&with_genres=99`,

	fetchTrendingTV: `/trending/tv/week?api_key=${API}&language=en-US`,
	fetchPopularTV: `/trending/tv/week?api_key=${API}&language=en-US`,
	fetchTopRatedTV: `/tv/top_rated?api_key=${API}&language=en-US`,	
	fetchActionTV: `/discover/tv?api_key=${API}&with_genres=10759`,
	fetchComedyTV: `/discover/tv?api_key=${API}&with_genres=35`,
	fetchMysteryTV: `/discover/tv?api_key=${API}&with_genres=9648`,
	fetchSciFiTV: `/discover/tv?api_key=${API}&with_genres=10765`,
	fetchAnimationTV: `/discover/tv?api_key=${API}&with_genres=16`,
	fetchRomanceTV: `/discover/tv?api_key=${API}&with_genres=10749`,
	fetchDocumentariesTV: `/discover/tv?api_key=${API}&with_genres=99`,
	fetchTalkTV: `/discover/tv?api_key=${API}&with_genres=10767`,

	fetchTrendingMovies: `/trending/movie/week?api_key=${API}&language=en-US`,
	fetchPopularMovies: `/trending/movie/week?api_key=${API}&language=en-US`,
	fetchTopRatedMovies: `/movie/top_rated?api_key=${API}&language=en-US`,	
	fetchSciFiMovies: `/discover/movie?api_key=${API}&with_genres=878`,
	fetchAnimationMovies: `/discover/movie?api_key=${API}&with_genres=16`,
	fetchDramaMovies: `/discover/movie?api_key=${API}&with_genres=18`,
	fetchWarMovies: `/discover/movie?api_key=${API}&with_genres=10752`,

	fetchPopularActionM: `/movie/popular?api_key=${API}&with_genres=28`,
	fetchPopularActionT: `/tv/popular?api_key=${API}&with_genres=10759`,
	fetchPopularComedyM: `/movie/popular?api_key=${API}&with_genres=35`,
	fetchPopularComedyT: `/tv/popular?api_key=${API}&with_genres=35`,
	fetchPopularAnimationM: `/movie/popular?api_key=${API}&with_genres=16`,
	fetchPopularAnimationT: `/tv/popular?api_key=${API}&with_genres=16`,
	fetchPopularCrimeM: `/movie/popular?api_key=${API}&with_genres=80`,
	fetchPopularCrimeT: `/tv/popular?api_key=${API}&with_genres=80`,
	fetchPopularFamilyM: `/movie/popular?api_key=${API}&with_genres=10751`,
	fetchPopularFamilyT: `/tv/popular?api_key=${API}&with_genres=10751`,
	fetchPopularMysteryM: `/movie/popular?api_key=${API}&with_genres=9648`,
	fetchPopularMysteryT: `/tv/popular?api_key=${API}&with_genres=9648`,
	fetchPopularRomanticM: `/movie/popular?api_key=${API}&with_genres=10749`,
	fetchPopularRomanticT: `/tv/popular?api_key=${API}&with_genres=10749`,
	fetchPopularDocumentaryM: `/movie/popular?api_key=${API}&with_genres=99`,
	fetchPopularDocumentaryT: `/tv/popular?api_key=${API}&with_genres=99`,

};

export default requests;

// https://api.themoviedb.org/3/trending/all/week?api_key=58253e4ac18b9d7ff47356fcc1a40f01&language=en-US