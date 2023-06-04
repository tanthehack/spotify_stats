import { redirectToAuthCodeFlow } from './redirToAuth';

const clientId = import.meta.env.VITE_APP_CLIENT_ID;

const params = new URLSearchParams(window.location.search);
const code = params.get("code");

export async function auth() {
    if (!code) {
        redirectToAuthCodeFlow(clientId);
    }
}