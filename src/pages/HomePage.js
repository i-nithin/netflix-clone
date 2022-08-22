import React from 'react'
import Hero from '../components/Hero'
import Row from '../components/Row'
import requests from '../Request'


const HomePage = () => {
  return (
    <div>
      <Hero />
      <Row rowId = '1' title = "Up coming"  fetchURL ={requests.requestUpcoming}/>
      <Row rowId = '2' title = "Popular"  fetchURL ={requests.requestPopular}/>
      <Row rowId = '3' title = "Trending"  fetchURL ={requests.requestTrending}/>
      <Row rowId = '4' title = "Top Rated"  fetchURL ={requests.requestTopRated}/>
      <Row rowId = '5' title = "Horror"  fetchURL ={requests.requestHorror}/>
    </div>
  )
}

export default HomePage