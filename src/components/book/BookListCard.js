import React from 'react';
import { generatePath, Link } from 'react-router-dom';
import paths from '../../router/paths';

export default function BookListCard({ book }) {
  const { name, image, rating, author } = book;

  return (
    <div className="bg-gray-100 w-3/12 inline-block rounded-xl m-2">
      <Link to={generatePath(paths.bookDetails, {id: book._id})}>
        <img className="w-full rounded-xl" src={image} alt="Book" />
      </Link>
      <div className="p-2">
        <h3>{name}</h3>
        <p>
          {author.firstName} {author.lastName}
        </p>
        <span>{rating}</span>
      </div>
    </div>
  );
}
