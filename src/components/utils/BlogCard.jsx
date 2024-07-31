import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import blogBG from '../../assets/blogBG.png';
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

  return (
    <Paper elevation={1} onClick={openDraft}>
      <Card sx={{ maxWidth: 320, widht: 320 }}>
        <CardActionArea>
          <CardMedia component="img" sx={{ height: 200, width: 320 }} image={blogBG} alt="blog media" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {blog.blogTitle}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {blog.blogAuthor}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Paper>
  );
};
export default BlogCard;
