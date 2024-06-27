import React from 'react'
import './Article.css'
import { IoArrowBack } from "react-icons/io5";



const Article = () => {
  return (
    <div>
        <div className='article-img'>
            <img src="" alt="IMAGE" />

        </div>
        <div className='text-container'>
            <h1 className='article-head'></h1>
            <p className='article-text'></p>
           
        </div>
        <button className='article-btn'><IoArrowBack  className='back-arrow'/>
        Back to homepage </button>
    </div>
  )
}

export default Article