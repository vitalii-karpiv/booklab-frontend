import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(getAllBook, []);

  function getAllBook() {
    axios(`http://localhost:4000/books/${id}`)
      .then((item) => setBook(item.data))
      .catch((err) => console.log(err));
  }

  function addReviewHandler() {
    axios({
      method: 'POST',
      url: `http://localhost:4000/book-details/${id}`,
      data: {
        firstName: 'Fred',
        lastName: 'Flintstone',
      },
    }).then((res) => {
      axios(`http://localhost:4000/books/${id}`)
        .then((item) => setBook(item.data))
        .then(getAllBook)
        .catch((err) => console.log(err));
    });
  }

  if (!book) return 'Loading...';

  return (
    <div className="container-md mx-auto">
      <img src={book.image} />
      <h3>{book.name}</h3>
      <h4>
        {book.author.firstName} {book.author.firstName}
      </h4>
      <p>
        Rating: <span>{book.rating}</span>
      </p>
      <button type="button" onClick={() => addReviewHandler()} className="bg-green-600 p-1 rounded px-2 my-3">
        Add review
      </button>
      <ul>
        {book.review.map((review) => (
          <div key={review._id} className="border-black border-2">
            <h5>
              Title: <br />
              {review.title}
            </h5>
            <p>
              Content: <br />
              {review.content}
            </p>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default BookDetails;
