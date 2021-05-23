import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookListCard from '../components/book/BookListCard';

export default function Home() {
  const [bookList, setBookList] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios('http://localhost:4000/books')
      .then((res) => setBookList(res.data))
      .catch((err) => setError(true));
  }, []);

  if (error) return <h1 className="text-center">Something went wrong!</h1>;
  if (!bookList) return <h1 className="text-center">Loading...</h1>;

  return (
    <>
      <h1 className="text-center">Books List</h1>
      <ul className="flex flex-wrap justify-between">
        {bookList.map((book) => {
          return <BookListCard key={book._id} book={book} />;
        })}
      </ul>
    </>
  );
}
