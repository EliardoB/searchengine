import React, { useState, useEffect } from 'react';
import { useResultContext } from '../context/ResultContextProvider';

export const Search = () => {
  const { setSearchTerm } = useResultContext();
  const [text, setText] = useState('');

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.keyCode === 13) { 
        event.preventDefault(); 
        document.getElementById('btnSearch').click(); 
      }
    };

    document.addEventListener('keydown', handleKeyPress); 

    return () => {
      document.removeEventListener('keydown', handleKeyPress); 
    };
  }, []);

  return (
    <div className="relative flex-1 sm:ml-48 md:ml-72 sm:-mt-4">
      <input
        id="txtSearch"
        value={text}
        type="text"
        className="sm:w- w-80 h-10 dark:bg-slate-700 border-1 rounded outline-none p-5 dark:text-white hover:shadow-lg"
        placeholder="Término de busqueda..."
        onChange={(e) => setText(e.target.value)}
      />
      {text !== '' && (
        <button
          type="button"
          className="absolute top-0.5 left-72 text-2xl dark:text-gray-500"
          onClick={() => setText('')}
        >
          🞭
        </button>
      )}
      <button
        id="btnSearch"
        className="ml-2 text-xl"
        onClick={() => setSearchTerm(text)}
      >
        🔍
      </button>
    </div>
  );
};
