const API_KEY = '0d8ab7cff2692bd014bb25fca16d7158';

export const apirequests = {
    getNetflixOriginals: `discover/tv?api_key=${API_KEY}&language=en-US&page=1&with_networks=213`,
    getCollections: (platform, endpoint) => { return `${platform}/${endpoint}?api_key=${API_KEY}&language=en-US&page=1` },
    getDetails: (platform, id) => `${platform}/${id}?api_key=${API_KEY}&append_to_response=videos,credits,recommendations,similar`,
    getGenreList: (platform) => `/genre/${platform}/list?api_key=${API_KEY}`,
    getVideoByGenre: (platform, genreId) => `discover/${platform}?api_key=${API_KEY}&language=en-US&page=1&with_genres=${genreId}`,
    getSearch: (platform, query) => `search/${platform}?api_key=${API_KEY}&language=en-US&query=${query}`
}

export const image_base_url = `https://image.tmdb.org/t/p/original`;


export const platformType = {
    tv: "tv",
    movie: "movie"
}

export const endpoints = {
    popular: "popular",
    upcoming: "upcoming",
    topRated: "top_rated",
    nowPlaying: "now_playing",
    airingToday: "airing_today",
    onTheAir: "on_the_air"
}


