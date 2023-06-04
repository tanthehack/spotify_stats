import { getAccessToken } from './getAccessToken';
import { getTopTracks } from './getTopTracks';

const clientId = import.meta.env.VITE_APP_CLIENT_ID;

const params = new URLSearchParams(window.location.search);
const code = params.get("code");

export async function getStats() {
    const accessToken = await getAccessToken(clientId, code);
    const topTracks = await getTopTracks(accessToken);
    return topTracks;
}
