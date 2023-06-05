import { getAccessToken } from './getAccessToken';
import { getTopTracks } from './getTopTracks';
import { redirectToAuthCodeFlow } from './redirToAuth';

const clientId = import.meta.env.VITE_APP_CLIENT_ID;

const params = new URLSearchParams(window.location.search);
const code = params.get("code");

export async function getStats() {
    if (!code) {
        redirectToAuthCodeFlow(clientId)
    } else {
        const accessToken = await getAccessToken(clientId, code);
        const topTracks = await getTopTracks(accessToken);
        return topTracks;
    }
}
