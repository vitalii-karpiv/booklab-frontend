import React from 'react';
import Navbar from '../navbar/Navbar';

export default function AppLayout(props) {
  const { children } = props;
  return (
    <>
      <Navbar />
      <div className="md:container md:mx-auto">{children}</div>
    </>
  );
}
