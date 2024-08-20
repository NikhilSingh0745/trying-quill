// components/QuillEditor.js
'use client'
import React from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css'; // Import the Quill snow theme CSS
import 'katex/dist/katex.min.css'; // Import KaTeX CSS for formula rendering

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const QuillEditor = ({ setEditorContent, value }) => {
  const handleChange = (content) => {
    setEditorContent(content);
  };

  return (
    <div>
      <ReactQuill
      style={{
        height: "40vh",
        margin: "30px"
      }}
        theme="snow"
        value={value}
        onChange={handleChange}
        modules={{
          toolbar: [
            [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            ['bold', 'italic', 'underline'],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'align': [] }],
            ['formula'],
            ['link', 'image','video'],
            [{ 'code-block': true }]
          
          ],
        }}
        formats={[
          'header', 'font',
          'bold', 'italic', 'underline',
          'list', 'bullet',
          'color', 'background',
          'align',
          'formula',
          'link', 'image', 'video','code-block'
        ]}
      />
    </div>
  );
};

export default QuillEditor;