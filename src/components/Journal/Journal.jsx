import React, { useState } from 'react';
import { FiBook, FiTrash2, FiPlusCircle, FiXCircle } from 'react-icons/fi';

const Journal = () => {
  const [albums, setAlbums] = useState([]);
  const [albumName, setAlbumName] = useState('');
  const [currentAlbum, setCurrentAlbum] = useState(null);
  const [entry, setEntry] = useState('');

  const addAlbum = () => {
    if (albumName.trim() !== '') {
      setAlbums([...albums, { name: albumName, entries: [] }]);
      setAlbumName('');
    }
  };

  const addEntry = () => {
    if (entry.trim() !== '' && currentAlbum !== null) {
      const updatedAlbums = albums.map((album) => {
        if (album.name === currentAlbum.name) {
          return { ...album, entries: [...album.entries, entry] };
        }
        return album;
      });
      setAlbums(updatedAlbums);
      setEntry('');
    }
  };

  const deleteEntry = (entryIndex) => {
    if (currentAlbum !== null) {
      const updatedAlbums = albums.map((album) => {
        if (album.name === currentAlbum.name) {
          return { 
            ...album, 
            entries: album.entries.filter((_, index) => index !== entryIndex) 
          };
        }
        return album;
      });
      setAlbums(updatedAlbums);
    }
  };

  const deleteAlbum = (albumName) => {
    setAlbums(albums.filter(album => album.name !== albumName));
    if (currentAlbum && currentAlbum.name === albumName) {
      setCurrentAlbum(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-300 p-6">
      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-lg p-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-700">My Journal Collection</h1>
        
        <div className="mb-8 flex justify-between items-center">
          <input
            type="text"
            value={albumName}
            onChange={(e) => setAlbumName(e.target.value)}
            placeholder="Create a new journal"
            className="border border-gray-300 p-2 w-full rounded-md mr-4"
          />
          <button
            onClick={addAlbum}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 flex items-center"
          >
            <FiPlusCircle className="mr-2" /> Add Journal
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {albums.map((album, index) => (
            <div
              key={index}
              className="relative bg-yellow-100 border border-yellow-300 p-4 rounded-lg shadow-md cursor-pointer hover:bg-yellow-200 transition duration-200"
              onClick={() => setCurrentAlbum(album)}
            >
              <div className="flex items-center justify-center h-full">
                <FiBook className="text-6xl text-yellow-600 mr-4" />
                <h2 className="text-xl font-semibold text-center">{album.name}</h2>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  deleteAlbum(album.name);
                }}
                className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-700"
              >
                <FiTrash2 />
              </button>
            </div>
          ))}
        </div>

        {currentAlbum && (
          <div className="mt-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-700">Journal: {currentAlbum.name}</h2>
            <textarea
              value={entry}
              onChange={(e) => setEntry(e.target.value)}
              placeholder="Write your thoughts here..."
              className="border border-gray-300 p-4 w-full rounded-md h-32 mb-4"
            />
            <button
              onClick={addEntry}
              className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 flex items-center justify-center"
            >
              <FiPlusCircle className="mr-2" /> Add Entry
            </button>
            <div className="mt-8">
              <h3 className="text-2xl font-semibold mb-4 text-gray-700">Entries:</h3>
              {currentAlbum.entries.map((entry, index) => (
                <div key={index} className="bg-gray-100 p-4 mb-2 rounded-md flex justify-between items-center shadow-sm">
                  <span>{entry}</span>
                  <button
                    onClick={() => deleteEntry(index)}
                    className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-700 flex items-center"
                  >
                    <FiTrash2 className="mr-1" /> Delete
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Journal;
