import logo from '../../assets/logo-dark.svg';
import { Link, useParams } from 'react-router-dom';
import { Parser } from '@alkhipce/editorjs-react';
import React, { useState, useEffect } from 'react';
import logoLight from '../../assets/logo.svg';
import { getPublishedBlogFromFirestoreWithoutSignIn } from '../../utils/utils';
import { Helmet } from 'react-helmet';

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
      <Helmet>
        <title>Blogosaurus</title>
        <meta name="description" content="Publish blogs at the speed of light" />
        <meta name="keywords" content="React, Blogs, Vercel, SEO" />
        <meta property="og:title" content="Blogosaurus" />
        <meta property="og:description" content="Publish blogs at the speed of light" />
      </Helmet>
      <div className="m-4">
        <div className="flex justify-between">
          <div>
            <img src={logo} alt="Blogosaurus" className="h-8 w-auto m-1" />
          </div>
          <div></div>
        </div>
        <div className="mx-4 sm:mx-8 lg:mx-12 xl:mx-80">{!loading && <Parser data={draftData} />}</div>
        <Link to="https://blogosaurus.vercel.app/" target="_blank" rel="noopener noreferrer">
          <div class="fixed bottom-0 right-0 m-4">
            <div class="bg-black flex rounded-full items-center">
              <img src={logoLight} alt="Blogosaurus" className="h-3 w-auto ml-2" />
              <p className="text-white  px-2.5 py-1 shadow text-xs">Made with Blogosaurus</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BlogViewer;
