import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import FolderRoundedIcon from '@mui/icons-material/FolderRounded';
import PublicIcon from '@mui/icons-material/Public';
import BlogsDrafts from './BlogsDrafts';
import BlogsPublished from './BlogsPublished';
import { EDITOR_DEFAULT_VALUE } from './EditorConfig';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const Blogs = () => {
  let newDraftURI = `/draft/${uuidv4()}`;
  const [tabValue, setTabValue] = React.useState('Drafts');

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const openNewDraft = () => {
    localStorage.setItem('draftEditor', JSON.stringify(EDITOR_DEFAULT_VALUE));
    window.open(newDraftURI, '_blank');
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <Tabs value={tabValue} onChange={handleTabChange} textColor="primary" indicatorColor="primary">
            <Tab value="Drafts" label="Drafts" />
            <Tab value="Published" label="Published" />
          </Tabs>
        </div>
        <div>
          <div className="flex">
            <div className="pt-2 relative mx-auto text-gray-600">
              <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none" type="search" name="search" placeholder="Search" />
              <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
                <SearchIcon className="pb-2" />
              </button>
            </div>

            <button onClick={openNewDraft} className="px-2 py-2.5 m-2 rounded-md bg-gray-700 text-white inline-flex items-center">
              <AddIcon fontSize="small" />
              <span className="text-sm">Add New Blog</span>
            </button>
          </div>
        </div>
      </div>
      {tabValue === 'Drafts' ? <BlogsDrafts /> : <BlogsPublished />}
    </div>
  );
};
export default Blogs;
