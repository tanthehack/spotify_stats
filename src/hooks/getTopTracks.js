import axios from 'axios';
const BASE_URL = 'https://api.spotify.com/v1';
const spotifyApi = axios.create({
    baseURL: BASE_URL,
});

export const getTopTracks = async (token) => {
    const result = await spotifyApi.get('/me/top/tracks', {
        headers: { Authorization: `Bearer ${token}` },
        params: {
            time_range: 'short_term',
            limit: 5, // You can adjust the number of tracks to retrieve
        },
    })

    return result.data.items;
}