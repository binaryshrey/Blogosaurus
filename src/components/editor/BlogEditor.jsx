import logo from '../../assets/logo-dark.svg';
import { useParams } from 'react-router-dom';
import React, { memo, useEffect, useRef, useState } from 'react';
import { createReactEditorJS } from 'react-editor-js';
import { Parser } from '@alkhipce/editorjs-react';
import { EDITOR_JS_TOOLS, EDITOR_DEFAULT_VALUE } from './EditorConfig';

const BlogEditor = () => {
  const { draftID } = useParams();
  const [previewMode, setPreviewMode] = useState(false);
  const [draftData, setDraftData] = useState();

  const handlePreviewMode = () => {
    if (previewMode) {
      setPreviewMode(false);
    } else {
      handleSave();
      setPreviewMode(true);
    }
  };

  const ReactEditorJS = createReactEditorJS();
  const editorCore = React.useRef(null);

  const handleInitialize = React.useCallback((instance) => {
    editorCore.current = instance;
  }, []);

  const handleSave = React.useCallback(async () => {
    const savedData = await editorCore.current.save();
    setDraftData(savedData);
  }, []);

  return (
    <>
      <div className="m-4">
        <div className="flex justify-between">
          <div>
            <img src={logo} alt="Blogosaurus" className="h-8 w-auto m-1" />
          </div>
          <div>
            <div>
              <button onClick={handlePreviewMode} className="px-4 py-1 m-1 rounded-full border border-gray-500 text-gray-500 inline-flex items-center">
                <span className="text-sm">{previewMode ? 'Edit' : 'Preview'}</span>
              </button>
              <button onClick={handleSave} className="px-4 py-1 m-1 rounded-full border border-gray-500 text-gray-500 inline-flex items-center">
                <span className="text-sm">Save</span>
              </button>
              <button className="px-4 py-1.5 m-1 rounded-full bg-gray-600 text-white inline-flex items-center">
                <span className="text-sm">Publish</span>
              </button>
            </div>
          </div>
        </div>
        <div>
          {!previewMode ? (
            <ReactEditorJS placeholder='Type "/" for commands...' onInitialize={handleInitialize} tools={EDITOR_JS_TOOLS} defaultValue={EDITOR_DEFAULT_VALUE} />
          ) : (
            <div className="mx-4 sm:mx-8 lg:mx-12 xl:mx-80">
              <Parser data={draftData} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BlogEditor;
