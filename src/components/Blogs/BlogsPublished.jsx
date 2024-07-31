import empty from '../../assets/empty.png';
import React from 'react';

const BlogsPublished = () => {
  return (
    <div>
      <p>BlogsPublished</p>
      <div className="flex justify-center items-center">
        <img src={empty} alt="empty" height={200} width={200} className="m-40" />
      </div>
    </div>
  );
};

export default BlogsPublished;
