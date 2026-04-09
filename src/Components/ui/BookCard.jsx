import React from 'react'
import { FaRegStar } from "react-icons/fa";
import { Link } from 'react-router';

const BookCard = ({book}) => {
  return (
    <Link to={`/bookDetails/${book.bookId}`} className="card bg-base-100  shadow-sm">
            <figure className="p-6">
              <img
                src={book.image} className="rounded-xl h-64"
                alt={book.bookName}
              />
            </figure>
            <div className="card-body">

                <div className=" flex items-center gap-4">
                     {
                    book.tags.map((tag,index) =>(
                        <div key={index} className="text-green-500 rounded-4xl bg-gray-100 p-2">{tag}</div>
                    ))
                 }

                 </div> 
                
              <h2 className="card-title text-2xl">
               
                {book.bookName}
                
              </h2>
              <p className="font-semibold text-lg">{book.author}</p>
            
              <div className="card-actions justify-between border-t border-dashed border-gray-400 text-xl pt-4">
                <div className="font-semibold">{book.category}</div>
                <div className="badge badge-outline flex justify-center  ">{book.rating} <FaRegStar/> </div>
              </div>
            </div>
          </Link>
  )
}

export default BookCard
