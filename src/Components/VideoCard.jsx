import React from 'react'
import { formatAgo } from '../util/date';
import { useNavigate } from 'react-router-dom';

export default function VideoCard({ video }) {
  const {title, thumbnails, channelTitle,publishedAt} = video.snippet;

  const navigate = useNavigate();

  return <li>
    <img 
    className='w-full'
    src ={thumbnails.medium.url} alt={title}
    onClick={() => {
      navigate(`/videos/watch/${video.id}`, {state : {video} })
      }}/>
    <div>
      <p className='font-semibold my-2 line-clamp-2'>{title}</p>
      <p className='text-sm opacity-80'>{channelTitle}</p>
      <p>{publishedAt}</p> 
      <p>{formatAgo(publishedAt,'ko')}</p>
      {/* timeago 라이브러리 사용하기 */}
    </div>

       
        
    </li>
  
}
