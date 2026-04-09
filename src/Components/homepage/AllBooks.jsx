import React, { use } from "react";

import BookCard from "../ui/BookCard";

const booksPromice = fetch("/booksData.json").then((res) => res.json());

const AllBooks = () => {
  const books = use(booksPromice);
  console.log(books);

  return (
    <div className="container mx-auto">
        <h2 className="font-bold text-4xl text-center mb-6">Books</h2>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {books.map((book,index) => {
        return (
          <BookCard key={index} book={book} />
        );
      })}

        </div>
     

    </div>
  );
};

export default AllBooks;
