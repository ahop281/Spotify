import { useContext } from 'react'
import { Songs } from '../Context'

export default function DetailSong() {
  const { song } = useContext(Songs)

  return (
    <div className="col-span-1 p-4">
        <h2 className="text-center text-cyan-400 font-bold">Now playing</h2>
        <h2 className="mt-2 text-center text-gray-400 text-2xl">{song.name}</h2>
        <div className="m-auto mt-16 w-64 max-h-72 overflow-hidden flex items-center">
            <img className="w-full bg-cover bg-center" src={song.links.images[0].url} alt="avatar" />
        </div>
        <div className="flex justify-evenly items-center mt-4">
            <img className="w-16 rounded-full" src={song.links.images[1].url} alt="author" />
            <span className="text-xl text-white">{song.author}</span>
        </div>
    </div>
  )
}
