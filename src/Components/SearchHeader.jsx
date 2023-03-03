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
    <Link to = '/'>
        <div className='flex'>
          <AiFillYoutube size={42} ></AiFillYoutube>        
        </div>
    </Link>

            <form className ="flex" onSubmit={handleSubmit} >
            <input 
            type="text" 
            className='bg-black text-slate-100'
            placeholder='search...'
            onChange={handleSearch}
            value={search}>
            </input>
            
            <button>
            <FiSearch></FiSearch>
            </button>
            </form>
      </>        
  )
}
