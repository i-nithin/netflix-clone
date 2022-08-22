import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Movie from './Movie'
import {MdChevronLeft,MdChevronRight} from 'react-icons/md'

const Row = ( { title, fetchURL, rowId }) => {

    const [ movies, setMovies ] = useState([])
    const [ like, setLike ] =useState(false)

    const slideLeft = () => {
        var slider = document.getElementById('slider'+rowId)
        slider.scrollLeft = slider.scrollLeft - 500
    }

    const slideRight = () => {
        var slider = document.getElementById('slider'+rowId)
        slider.scrollLeft = slider.scrollLeft + 500
    }

    useEffect(() => {
       axios.get(fetchURL).then(response => setMovies(response.data.results)) 
    },[fetchURL])

  return (
    <>
    <h2 className='text-white font-bold md:text-xl p-4 '>{title}</h2>
    <div className='relative flex items-center group'>
        <MdChevronLeft onClick ={slideLeft} className='bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40}/>
        <div id ={'slider'+rowId} className = "w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide">
            {
                movies.map((item,id) => {
                    return(
                        <Movie item ={item} key={id} like = {like}  setLike = { setLike }/>
                    )
                })
            }
        </div>
        <MdChevronRight onClick={slideRight} className='bg-white rounded-full absolute right-0 opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40}/>
    </div>
    </>
  )
}

export default Row