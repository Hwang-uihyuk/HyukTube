import React from 'react'
import { useLocation } from 'react-router-dom'

export default function VideosDetail() {
  const location = useLocation();

  // const video = location.state.video; 이렇게도 사용할 수 있음
  const {
    state : {video},
  } = useLocation();
  console.log(video)

  return (
    <section>
      <iframe 
        id='player'
        type="text/html"
        width='100%'
        height='640'
        src={`http://www.youtube.com/embed/${video.id}`}
        frameborder='0'
        ></iframe>
    </section>
      
      
      
  )
}
