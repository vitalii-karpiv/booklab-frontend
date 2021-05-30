import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BookListRow from '../components/book/BookListRow';
import avatar from '../images/avatar_default.png';

const Profile = () => {
  const [bookList, setBookList] = useState(null);

  useEffect(() => {
    axios('http://localhost:4000/books').then((res) => setBookList(res.data));
  }, []);

  if (!bookList) return <h3>Loading...</h3>;
  return (
    <div className="flex justify-between">
      <div className="w-1/3">
        <img src={avatar} alt="avatar" className="w-1/5 rounded-xl m-auto" />
        <h4 className="my-3 text-center">Vitalii Karpiv</h4>
        <div className="border-black border rounded-xl bg-gray-100">
          <h5 className="bg-gray-200 rounded-t-xl border p-2">About me</h5>
          <ul className="p-2">
            <li className="my-2">
              Register date: <span>date</span>
            </li>
            <li className="my-2">
              Sex: <span>Male</span>
            </li>
            <li className="my-2">
              Read Books: <span>3</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex-col w-2/3">
        <BookListRow bookList={bookList} title="Wishlist" />
        <BookListRow bookList={bookList} title="In progress" />
        <BookListRow bookList={bookList} title="Already read" />
      </div>
    </div>
  );
};

export default Profile;
