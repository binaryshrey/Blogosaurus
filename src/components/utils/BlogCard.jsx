import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import blogBG from '../../assets/blogBG.png';
import blogCard from '../../assets/blogCard.png';
import Paper from '@mui/material/Paper';
import { v4 as uuidv4 } from 'uuid';

const BlogCard = ({ blog }) => {
  let blogURI = '';
  if (blog.blogStatus === 'Published') {
    blogURI = `/blog/${blog.blogID}`;
  } else {
    blogURI = `/draft/${blog.blogID}`;
  }

  const openDraft = () => {
    localStorage.setItem('draftEditor', JSON.stringify(blog.blogContents));
    window.open(blogURI, '_blank');
  };

  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  let date = new Date(blog.blogTimestamp);
  let formattedDate = date.toLocaleDateString('en-US', options);

  return (
    <div class="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer" onClick={openDraft}>
      <img src={blogCard} alt="Blog Image" class="w-full rounded-t-lg object-cover" />
      <div class="p-4">
        <p class="text-gray-600"> {formattedDate}</p>
        <h2 class="text-xl font-bold text-gray-800 mt-4"> {blog.blogTitle}</h2>
        <p class="text-gray-700">{blog.blogAuthor}</p>
      </div>
    </div>
  );
};
export default BlogCard;
