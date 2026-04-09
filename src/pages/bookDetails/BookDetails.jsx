import React from "react";
import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  const { bookId: bookParamsId } = useParams();


  const books = useLoaderData();
  console.log(books);

  const expectedBook = books.find(
    (book) => book.bookId === Number(bookParamsId),
  );
  console.log(expectedBook);

  const {
    bookId,
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = expectedBook;

  return (
    <div className=" grid grid-cols-2 bg-base-100 shadow-sm w-[80%] mx-auto my-10">
      <figure className="w-full flex justify-center items-center bg-gray-100 rounded-2xl">
        <img src={image} className="h-[400px] "  alt="Album" />
      </figure>
      <div className="card-body space-y-3 ">
        <h2 className="card-title text-2xl">{bookName}</h2>
        <h2 className="card-title ">By: {author}</h2>
        <p className="py-2 border-y">{category}</p>
        <p>Review: {review}</p>

        <div className=" flex items-center gap-4">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="text-green-500 rounded-4xl bg-gray-100 p-2"
            >
              {tag}
            </div>
          ))}
        </div>

        <div className=" border-t space-y-3">
          <div className="fles justify-between items-center gap-3">
            <span>Number of pages:</span> <span>{totalPages}</span>
          </div>
          <div className="fles justify-between items-center gap-3">
            <span>Publisher:</span> <span>{publisher}</span>
          </div>
          <div className="fles justify-between items-center gap-3">
            <span>Year of publishing:</span> <span>{yearOfPublishing}</span>
          </div>

          <div className="flex items-center gap-2 ">
            <button className="btn">Read</button>
            <button className="btn btn-success text-white">Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
