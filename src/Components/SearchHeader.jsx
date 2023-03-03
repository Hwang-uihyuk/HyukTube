import React, { useEffect, useState } from 'react'
import {FiSearch} from 'react-icons/fi';
import {AiFillYoutube} from 'react-icons/ai';
import { Link, useNavigate, useParams } from 'react-router-dom';
export default function SearchHeader() {
  const [search, setSearch] = useState('')
  const navigate = useNavigate();
  const { keyword } = useParams();

  const handleSearch = (e) => {
    setSearch(e.target.value);
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      navigate(`/videos/${search}`)
      setSearch('')
  }

  // useEffect(()=> 
  //   setSearch(keyword || ''),
  // [keyword])

  return (
    <>
    <header className='w-full flex p-4 text-2xl border-b border-zinc-600 mb-4'>
    <Link to = '/' className='flex items-center '>
        <div className='flex'>
          <AiFillYoutube className='text-4xl text-brand'  ></AiFillYoutube>        
        </div>
        <h1 className='font-bold ml-2 text-3xl'> YouTube</h1>
    </Link>

            <form className ="flex w-full justify-center" onSubmit={handleSubmit} >
            <input 
            type="text" 
            className='bg-black text-gray-50 w-7/12 p-2 outline-none'
            placeholder='search...'
            onChange={handleSearch}
            value={search}>
            </input>
            
            <button className='bg-zinc-600 px-4'>
            <FiSearch></FiSearch>
            </button>
            </form>
      </header>
      </>        
  )
}
