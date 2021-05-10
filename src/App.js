import React from 'react';
import './App.css';
import PostForm from './PostForm';
import AllPost from './AllPost';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <PostForm />
      <AllPost />
      <Footer />
    </div>
  );
}

export default App;
