import React from 'react';
import { generatePath, Link } from 'react-router-dom';
import paths from '../../router/paths';

export default function BookListCard({ book }) {
  const { name, image, rating, author } = book;

  return (
    <div className="bg-gray-100 w-48 inline-block rounded-xl m-2 h-80">
      <Link to={generatePath(paths.bookDetails, { id: book._id })}>
        <img className="w-full rounded-xl" src={image} alt="Book" />
      </Link>
      <div className="p-2 block">
        <h3 className="font-bold">{name}</h3>
        <p className="">
          {author.firstName} {author.lastName}
        </p>
        <i className="fa fa-star-o text-yellow-400 mr-2" aria-hidden="true" />
        <span>{rating}</span>
      </div>
      <button type="button" className="bg-blue-500 block text-white mx-auto align-bottom rounded-xl px-9 py-1 my-2">
        ADD
      </button>
    </div>
  );
}
