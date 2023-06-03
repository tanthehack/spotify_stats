import { getAccessToken } from './getAccessToken';
import { getTopTracks } from './getTopTracks';

const clientId = "5e8feaa52cf04f7b82825059cd4d79e7";

const params = new URLSearchParams(window.location.search);
const code = params.get("code");

export async function getStats() {
    const accessToken = await getAccessToken(clientId, code);
    const topTracks = await getTopTracks(accessToken);
    return topTracks;
}
