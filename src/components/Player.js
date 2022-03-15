import { useContext } from 'react'
import { Songs } from '../Context'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'

export default function Player() {
    const { song, handleSetSong } = useContext(Songs)

    const handleClickPrevious = () => {
        handleSetSong(song.id - 1)
    }

    const handleClickNext = () => {
        handleSetSong(song.id + 1)
    }

    return (
        <div>
            <AudioPlayer
                className="player"
                src={song.url}
                layout="stacked-reverse"
                showSkipControls={true}
                onClickPrevious={handleClickPrevious}
                onClickNext={handleClickNext}
                onEnded={handleClickNext}
            />
        </div>
    )
}
