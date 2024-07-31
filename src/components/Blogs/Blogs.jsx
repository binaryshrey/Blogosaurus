import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from '@material-tailwind/react';
import FolderRoundedIcon from '@mui/icons-material/FolderRounded';
import PublicIcon from '@mui/icons-material/Public';
import BlogsDrafts from './BlogsDrafts';
import BlogsPublished from './BlogsPublished';

const Blogs = () => {
  let newDraftURI = `/draft/${uuidv4()}`;
  const tabs = [
    {
      label: 'Drafts',
      value: 'Drafts',
      icon: FolderRoundedIcon,
      desc: <BlogsDrafts />,
    },
    {
      label: 'Published',
      value: 'Published',
      icon: PublicIcon,
      desc: <BlogsPublished />,
    },
  ];

  return (
    <div>
      <Tabs value="Drafts">
        <div className="flex justify-between items-center">
          <div>
            <TabsHeader style={{ width: '30rem' }}>
              {tabs.map(({ label, value, icon }) => (
                <Tab key={value} value={value}>
                  <div className="flex items-center gap-2">
                    {React.createElement(icon, { className: 'w-5 h-5' })}
                    {label}
                  </div>
                </Tab>
              ))}
            </TabsHeader>
          </div>
          <div>
            <div className="flex">
              <div className="pt-2 relative mx-auto text-gray-600">
                <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none" type="search" name="search" placeholder="Search" />
                <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
                  <SearchIcon className="pb-2" />
                </button>
              </div>
              <Link to={newDraftURI} target="_blank" rel="noopener noreferrer">
                <button className="px-2 py-2.5 m-2 rounded-md bg-gray-700 text-white inline-flex items-center">
                  <AddIcon fontSize="small" />
                  <span className="text-sm">Add New Blog</span>
                </button>
              </Link>
            </div>
          </div>
        </div>

        <TabsBody>
          {tabs.map(({ value, desc }) => (
            <TabPanel key={value} value={value} className="p-0">
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
};
export default Blogs;
