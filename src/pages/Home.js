import React from 'react';
import { BookFactory, AuthorFactory, ReviewFactory, BookListFactory } from '../_mocks_/BookFactory';
import BookListCard from '../components/book/BookListCard';

export default function Home() {
  const listOfBooks = BookListFactory();
  console.log(listOfBooks);
  return (
    <>
      <h1 className="text-center">Books List</h1>
      <ul className="flex flex-wrap justify-between">
        {listOfBooks.map((book) => {
          return <BookListCard key={book._id} book={book} />;
        })}
      </ul>
    </>
  );
}
