import React from 'react'
import BookImage from '../../assets/hero_img.jpg'
const Banner = () => {
  return (
   <div className="hero bg-base-200 min-h-[70vh] rounded-2xl my-8 container mx-auto w-[80%]">
  <div className="hero-content flex-col lg:flex-row-reverse w-full justify-between">
    <img
      src={BookImage}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold">Books to freshen up <br />your bookshelf</h1>
    
      <button className="btn btn-success text-white mt-5">View the list</button>
    </div>
  </div>
</div>
  )
}

export default Banner
