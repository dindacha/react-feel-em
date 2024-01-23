import axios from "axios"

const apiKey = process.env.REACT_APP_APIKEY
const baseUrl = process.env.REACT_APP_BASEURL


export const getMovieList = async() => {
    try {
        const movie = await axios.get(`${baseUrl}/movie/popular?page=1&api_key=${apiKey}`)
        return movie.data.results;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export const searchMovie = async(q) => {
    try {
        const search = await axios.get(`${baseUrl}/search/movie?query=${q}&page=1&api_key=${apiKey}`)
        return search.data
    } catch (error) {
        console.error(error);
        throw error;
    }
}
