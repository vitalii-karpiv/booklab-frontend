import React from 'react';
import BookListCard from './BookListCard';

const BookListRow = ({bookList, title}) => {
  return (
    <div className="flex-col bg-blue-100 rounded-xl m-2">
      <h4 className="px-4 py-2 text-white text-xl">{title}</h4>
      <div className="overflow-x-scroll whitespace-nowrap px-2">
        {bookList.map(book => {
          return <BookListCard key={book._id} book={book} />
        })}
      </div>
    </div>
    
  )
}

export default BookListRow;
