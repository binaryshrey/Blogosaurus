import empty from '../../assets/empty.png';
import React, { useState, useEffect } from 'react';
import { UserAuth } from '../../hooks/AuthContext';
import SkeletonLoader from '../utils/SkeletonLoader';
import BlogCard from '../utils/BlogCard';

import { getBlogsFromFirestore } from '../../utils/utils';

const BlogsDrafts = () => {
  const { user } = UserAuth();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch blogs from Firestore
    const fetchBlogs = async () => {
      try {
        const email = JSON.parse(localStorage.getItem('email'));
        const fetchedBlogs = await getBlogsFromFirestore(email);
        setBlogs(fetchedBlogs);
      } catch (error) {
        setError('Failed to fetch blogs');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [user]);

  return (
    <div>
      <div className="mt-8">
        {loading && <SkeletonLoader variant="rectangular" height={150} width={300} />}
        {blogs.length === 0 && !loading && (
          <div className="flex justify-center mt-40">
            <img src={empty} alt="empty" height={200} width={200} />
          </div>
        )}
        <div className="flex m-1 flex-wrap">
          {blogs.length !== 0 &&
            !loading &&
            blogs.map((blog) => (
              <div key={blog.blogID} className="mr-4 mt-4">
                <BlogCard blog={blog} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsDrafts;
