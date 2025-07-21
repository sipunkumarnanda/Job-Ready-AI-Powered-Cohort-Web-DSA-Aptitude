
import React, { useState } from 'react'
import "../components/MoodSongs.css"

const MoodSongs = () => {
   const [songs, setSongs] =  useState([
    {
      title : "test_title",
      artist : "test_artist",
      url : "test_url"
    },
    {
      title : "test_title",
      artist : "test_artist",
      url : "test_url"
    },
    {
      title : "test_title",
      artist : "test_artist",
      url : "test_url"
    },
   ])
  return (
    <div className="mood-songs">
      <h2>Recomended Songs</h2>
        {songs.map((song, index)=>{
          return (
             <div key={index} className='songs'>
          <div className="title">
            <h3>{song.title}</h3>
            <p>{song.artist}</p>
          </div>
          <div className="play-pause-button">
            <i className="ri-pause-line"></i>
            <i className="ri-play-circle-fill"></i>
          </div>
        </div>
          )
      })}
    </div>
  )
}

export default MoodSongs