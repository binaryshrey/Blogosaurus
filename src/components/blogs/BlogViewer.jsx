import logo from '../../assets/logo-dark.svg';
import { useParams } from 'react-router-dom';
import { Parser } from '@alkhipce/editorjs-react';
import React, { useState } from 'react';

const BlogViewer = () => {
  const { draftID } = useParams();
  const [draftData, setDraftData] = useState(localStorage.getItem('draftEditor') ? JSON.parse(localStorage.getItem('draftEditor')) : {});

  return (
    <div>
      <div className="m-4">
        <div className="flex justify-between">
          <div>
            <img src={logo} alt="Blogosaurus" className="h-8 w-auto m-1" />
          </div>
          <div></div>
        </div>
        <div className="mx-4 sm:mx-8 lg:mx-12 xl:mx-80">
          <Parser data={draftData} />
        </div>
      </div>
    </div>
  );
};

export default BlogViewer;
