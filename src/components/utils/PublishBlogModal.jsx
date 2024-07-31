import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';
import SnackAlert from './SnackAlert';
import { UserAuth } from '../../hooks/AuthContext';
import { saveBlogAsPublishToFirestore } from '../../utils/utils';

const PublishBlogModal = ({ open, handleClose, draftData, draftID }) => {
  const { logOut, user } = UserAuth();

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleSnackbarOpen = () => {
    setSnackbarOpen(true);
  };
  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const publishBlog = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    const title = formJson.untitledblog;
    const desc = formJson.description;
    handleSnackbarOpen();
    saveBlogAsPublishToFirestore({
      draftID: draftID,
      title: title,
      description: desc,
      contents: draftData,
      author: user.displayName,
      authorPhoto: user.photoURL,
      authorEmail: user.email,
      timestamp: Date.now(),
    });
    setSnackbarMessage(`Published successfully! - https://blogosaurus.vercel.app/blog/${draftID}`);
    handleClose();
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: publishBlog,
        }}
      >
        <DialogTitle>Publish Blog</DialogTitle>
        <Divider />
        <DialogContent>
          <DialogContentText>To publish this blog, please add a blog title and description.</DialogContentText>
          <TextField fullWidth required label="Title" id="untitledblog" name="untitledblog" defaultValue="Untitled Blog" size="small" sx={{ marginTop: '20px', marginBottom: '10px' }} />

          <TextField fullWidth multiline maxRows={4} label="Description" id="description" name="description" size="small" sx={{ marginBottom: '20px' }} />
        </DialogContent>
        <Divider />
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Publish</Button>
        </DialogActions>
      </Dialog>
      <SnackAlert open={snackbarOpen} message={snackbarMessage} severity="success" onClose={handleSnackbarClose} />
    </>
  );
};

export default PublishBlogModal;
