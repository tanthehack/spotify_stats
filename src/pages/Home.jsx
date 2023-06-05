import './Home.css';
import { auth } from '../hooks/auth';

export const Home = () => {
    return (
        <>
            <div className="welcome">
                <h1>Welcome to <br />Spotify Stats</h1>
                <div className="about">
                    <p>This is a demo project to test the spotify API :)</p>
                    <button onClick={auth}>Login</button>
                </div>
            </div>

        </>
    )
}
