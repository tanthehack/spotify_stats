import { redirectToAuthCodeFlow } from './redirToAuth';

const clientId = "5e8feaa52cf04f7b82825059cd4d79e7";

const params = new URLSearchParams(window.location.search);
const code = params.get("code");

export async function auth() {
    if (!code) {
        redirectToAuthCodeFlow(clientId);
    }
}