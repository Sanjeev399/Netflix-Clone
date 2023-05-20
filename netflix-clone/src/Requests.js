const API_KEY = "a032aadfc842f0c63f0f7a987c406036";


const requests ={

    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,


    // fetchTrending:`/trending/all/day?api_key=${API_KEY}`,
    // fetchMovies:`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    // fetchTvshow:`/tv/{tv_id}/season/{season_number}?api_key=${API_KEY}&language=en-US`,

    // https://api.themoviedb.org/3/trending/all/week?api_key=a032aadfc842f0c63f0f7a987c406036&language=en-US

};

export default requests;

// https://image.tmdb.org/t/p/original/discover/tv?api_key=a032aadfc842f0c63f0f7a987c406036&with_networks=213

// https://api.themoviedb.org/3/discover/tv?api_key=a032aadfc842f0c63f0f7a987c406036&with_networks=213