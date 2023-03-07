import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import { useParams } from 'react-router-dom'
import { search } from '../api/youtube';
import VideoCard from '../Components/VideoCard';
import FakeYoutube from '../api/fakeYoutube';

export default function Videos() {

  const {keyword} = useParams();
  const {isLoading, error, data: videos} = useQuery(
    ['videos', keyword], ()=>{
      const youtube = new FakeYoutube();
      return youtube.search(keyword)

    });
  return (
    <>
    <div className='font-bold'>Videos {keyword ? `😮${keyword}` :  '🐶'}</div>
    {isLoading&&<p>Loading...</p>}
    {error && <p>Something is wrong ..</p>}
    
    {videos && (
      <ul>
        {videos.map((video) => (
          <VideoCard key ={video.id} video={video} />
        ))}
      </ul>
    )}
        



    </>
  )
}
