import React, { useState } from 'react'
import {FaHeart, FaRegHeart} from 'react-icons/fa'
import { db } from '../firebase'
import { doc, arrayUnion, updateDoc } from 'firebase/firestore'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'


const Movie = ( { key, item, like, setLike} ) => {

  const [ saved, setSaved ] = useState(false)
  const user = useSelector(selectUser)
  const movieId = doc(db, 'users', `${user?.email}`)
  console.log(user?.email)
  const saveShows = async() => {
    if(user) {
      setLike(!like)
      setSaved(true)
      await updateDoc(movieId, {
        savedShows :arrayUnion({
          id : item.id,
          title : item.title,
          img : item.backdrop_path
        })
      })
    }else{
      alert("please log in ")
    }
  }

  return (
    <div className='w-[180px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-4 ' key={item?.id}>
    <img src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`} alt ={item?.title} />
    <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
        <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>{item?.title}</p>
        <p onClick={saveShows}>
            {
                like ? <FaHeart className='absolute top-6 left-6 text-gray-300' />: <FaRegHeart className='absolute top-6 left-6 text-gray-300' />
            }
        </p>
    </div>
</div>
  )
}

export default Movie