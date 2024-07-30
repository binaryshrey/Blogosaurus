import React from 'react';
import empty from '../../assets/empty.png';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const Blogs = () => {
  let newDraftURI = `/draft/${uuidv4()}`;
  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <p className="font-normal text-xl">Blogs</p>
        </div>
        <div>
          <div className="flex">
            <div className="pt-2 relative mx-auto text-gray-600">
              <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none" type="search" name="search" placeholder="Search" />
              <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
                <SearchIcon className="pb-2" />
              </button>
            </div>
            <Link to={newDraftURI}>
              <button className="px-2 py-2.5 m-2 rounded-md bg-gray-700 text-white inline-flex items-center">
                <AddIcon fontSize="small" />
                <span className="text-sm">Add New Blog</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <img src={empty} alt="empty" height={200} width={200} className="m-40" />
      </div>
    </div>
  );
};
export default Blogs;
