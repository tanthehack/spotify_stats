import './TopTracks.css'
import { getStats } from "../hooks/getStats";
import { useState, useEffect } from 'react';

export const TopTracks = () => {
    const [tracks, setTracks] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const tracks = await getStats()
                setTracks(tracks)
            } catch (error) {
                console.error('ERORR:', error)
            }
        }
        fetchData();
    })

    return (
        <>
            <div className='tracks'>
                <div className='header'>
                    <h1>Top Tracks</h1>
                    <p>Your top listened to songs in the last 4 weeks</p>
                </div>
                <ul>
                    {tracks.map((track, index) => (
                        <li key={track.id}>
                            <a href={track.external_urls.spotify} target="_blank" rel="noopener noreferrer">
                                <h1>{index + 1}</h1>
                                <div className='details'>
                                    <img src={track.album.images[0].url} alt={track.album.name} />
                                    <div className='text'>
                                        <h3>{track.name}</h3>
                                        <p>{track.artists.map((artist) => artist.name).join(', ')}</p>
                                    </div>
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}
