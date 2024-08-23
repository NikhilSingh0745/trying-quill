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
    console.log('Editor content:', content); // Inspect the content here
  };

  return (
    <div>
      <ReactQuill
        style={{
          height: "60vh",
          margin: "30px",
        }}
        theme="snow"
        value={value}
        onChange={handleChange}
        modules={{
          toolbar: [
            [{ 'header': [1, 2, 3, false] }], // Specify headers: h1, h2, h3
            [{ 'font': ['sans-serif', 'serif', 'monospace', 'poppins', 'arial', 'verdana'] }], // Added fonts
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            ['bold', 'italic', 'underline'],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'align': [] }],
            ['link', 'image', 'video'], // Default link functionality
            [{ 'code-block': true }],
            [{ 'indent': '-1' }, { 'indent': '+1' }]
          ],
        }}
        formats={[
          'header', 'font',
          'bold', 'italic', 'underline',
          'list', 'bullet',
          'color', 'background',
          'align',
          'link', 'image', 'video', 'code-block',
          'indent'
        ]}
      />
    </div>
  );
};

export default QuillEditor;
