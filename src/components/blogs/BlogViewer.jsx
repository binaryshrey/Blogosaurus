import logo from '../../assets/logo-dark.svg';
import { useParams } from 'react-router-dom';
import { Parser } from '@alkhipce/editorjs-react';
import React, { useState, useEffect } from 'react';
import { getPublishedBlogFromFirestoreWithoutSignIn } from '../../utils/utils';

const BlogViewer = () => {
  const { blogID } = useParams();
  const [draftData, setDraftData] = useState(localStorage.getItem('draftEditor') ? JSON.parse(localStorage.getItem('draftEditor')) : []);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch blogs from Firestore
    const fetchPublishedBlog = async () => {
      try {
        const fetchedBlog = await getPublishedBlogFromFirestoreWithoutSignIn(blogID);
        setDraftData(fetchedBlog);
      } catch (error) {
        setError('Failed to fetch blogs');
      } finally {
        setLoading(false);
      }
    };

    fetchPublishedBlog();
  }, []);

  return (
    <div>
      <div className="m-4">
        <div className="flex justify-between">
          <div>
            <img src={logo} alt="Blogosaurus" className="h-8 w-auto m-1" />
          </div>
          <div></div>
        </div>
        <div className="mx-4 sm:mx-8 lg:mx-12 xl:mx-80">{!loading && <Parser data={draftData} />}</div>
      </div>
    </div>
  );
};

export default BlogViewer;
