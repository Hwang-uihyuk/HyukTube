import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from './Pages/NotFound';
import Videos from './Pages/Videos';
import VideosDetail from './Pages/VideosDetail';

const router = createBrowserRouter([
  {
    path :'/',           // 
    element : <App/>, //이게 왜 App이여야 하는지 모르겠음 =>최상위 경로에서 보여줘야 하니깐
    errorElement: <NotFound/>,
    children : [{
      index : true, //index true를 해주는 이유는 무엇일까? 이렇게 하면 오류가 덜 나온다고 하는데 무슨 소리인지 잘 모르겠다.
      path :'/',
      element : <Videos/>,
      errorElement:<NotFound/>
   },
   {
     path: '/videos',
     element : <Videos/>,
     errorElement : <NotFound/>
   },

   {
    path: '/videos/:keyword',
    element : <Videos/>,
    errorElement : <NotFound/>
  },

  {
    path: '/videos/watch/:videoId',
    element : <VideosDetail/>,
    errorElement : <NotFound/>
  },

  ]
  },

])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router ={router} /> 
    {/* react router가 경로에 따라서 선택할 수 있게 선택권을 양도해줘야 한다. */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
