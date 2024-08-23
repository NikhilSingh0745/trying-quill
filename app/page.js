'use client'
import React, { useState, useEffect } from 'react';
import QuillEditor from './component/QuillEditor';

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [editorContent, setEditorContent] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  // Load todos from local storage when the component mounts
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    console.log("savedTodos", savedTodos)
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  // Save todos to local storage whenever they change
  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem('todos', JSON.stringify(todos));
    } else {
      localStorage.removeItem('todos');
    }
  }, [todos]);

  const handleSubmit = () => {
    if (editorContent.trim()) {
      if (editIndex !== null) {
        const updatedTodos = todos.map((todo, index) =>
          index === editIndex ? editorContent : todo
        );
        setTodos(updatedTodos);
        setEditIndex(null);
      } else {
        setTodos([...todos, editorContent]);
      }
      setEditorContent('');
    }
  };

  const handleEdit = (index) => {
    setEditorContent(todos[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
    if (editIndex === index) {
      setEditIndex(null);
      setEditorContent('');
    }
  };

  return (
    <div>
      <h1 className='ml-10 mt-4'>My Quill Editor</h1>
      
      <QuillEditor setEditorContent={setEditorContent} value={editorContent} />
      <button
        className='py-3 px-4 bg-slate-800 mt-[50px] ml-8 rounded-xl text-white'
        onClick={handleSubmit}
      >
        {editIndex !== null ? 'Update' : 'Submit'}
      </button>

      <div className='mt-2 ml-8'>
        <h2 className='text-lg font-semibold'>Todo List</h2>
        <ul className='todo-list'>
          {todos.map((todo, index) => (
            <li key={index} className='mt-2 flex items-start'>
              <div
                className='p-2 border border-gray-300 rounded w-full'
                dangerouslySetInnerHTML={{ __html: todo }}
              />
              <button
                className='ml-4 px-2 py-1 bg-yellow-500 text-white rounded mr-2'
                onClick={() => handleEdit(index)}
              >
                Edit
              </button>
              <button
                className='ml-4 px-2 py-1 bg-red-500 text-white rounded mr-5'
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
