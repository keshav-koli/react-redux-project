import axios from "axios";
const unsplashKey = import.meta.env.VITE_UNSPLASH_KEY;
const giphyKey = import.meta.env.VITE_GIPHY_KEY;
const coverrKey = import.meta.env.VITE_COVERR_KEY;

export async function fetch_photos(searchText) {
    try {
        const res = await axios.get('https://api.unsplash.com/search/photos', {
            params: {
                query: searchText,
                page: 1,
                per_page: 20,
                // client_id:unsplashKey
            },
            headers: {
                Authorization: `Client-ID ${unsplashKey}`
            }
        })
        let response = res.data.results
        return response;
    } catch {
        console.error("UnSplash API error:", error.response?.data || error.message);
        throw error;
    }
}

export async function fetch_gif(searchText) {
    try {
        const res = await axios.get('https://api.giphy.com/v1/gifs/search', {
            params: {
                q: searchText,
                limit: 20,
                api_key: giphyKey
            },
        })
        let response = res.data
        return response;
    } catch {
        console.error("GIPHY API error:", error.response?.data || error.message);
        throw error;
    }
}

export const fetch_videos = async (searchText) => {
    try {
        const response = await axios.get("https://api.coverr.co/videos", {
            params: {
                query: searchText,
                page: 0,
                page_size: 20,
                urls: true,
                api_key: coverrKey,
            },
        });
        return response.data.hits;
    } catch (error) {
        console.error("Coverr API error:", error.response?.data || error.message);
        throw error;
    }
};
