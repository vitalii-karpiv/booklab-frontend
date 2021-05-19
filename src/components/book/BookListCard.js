import React from 'react';
import { Link } from 'react-router-dom';

export default function BookListCard(props) {
  const { book } = props;
  const { name, image, rating, author } = book;

  return (
    <div className="bg-gray-100 w-3/12 inline-block rounded-xl m-2">
      <Link to="/">
        <img className="w-full rounded-xl" src={image} alt="Book image" />
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
