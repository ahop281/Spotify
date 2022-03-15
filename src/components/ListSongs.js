import { useContext, useEffect, useState } from 'react'
import { Songs } from '../Context'

export default function ListSongs() {
    const { DataSongs, song, handleSetSong } = useContext(Songs)
    const [songId, setSongId] = useState(song.id)

    const handleClick = index => {
        setSongId(index)
        handleSetSong(index)
    }
    
    useEffect(() => {
        setSongId(song.id)
    }, [song])
    
  return (
    <div className="col-span-2 overflow-y-scroll relative">
        <table className="table-auto w-full">
            <thead className="top-0 h-12 text-white">
                <tr className="sticky top-0 h-12 bg-slate-700">
                    <th className="w-[10%]">#</th>
                    <th className="text-left">Title</th>
                    <th className="w-[10%]">Author</th>
                    <th className="w-[10%]"><i className="fas fa-download"></i></th>
                </tr>
            </thead>
            <tbody className="mt-12">
                {
                    DataSongs.map((song, index) => (
                        <tr
                            key={index}
                            className={`h-12 text-gray-400 bg-slate-800 hover:bg-slate-600 ${index === songId && "text-teal-400 bg-slate-600"}`}
                            onClick={() => handleClick(index)}
                        >
                            <td className="text-center">{index + 1}</td>
                            <td>{song.name}</td>
                            <td className="text-center">{song.author}</td>
                            <td className="text-center"><a href={song.url}><i className="fas fa-download"></i></a></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}
