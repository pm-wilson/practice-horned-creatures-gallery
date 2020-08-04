import React from 'react';
import './App.css';
import images from './data.js';
import CreaturesHeader from './CreaturesHeader.js';
import CreaturesImageList from './CreaturesImageList.js';
import CreaturesFooter from './CreaturesFooter.js';

function App() {
  return (
    <div>
      <CreaturesHeader />
      <CreaturesImageList data={images} />
      <CreaturesFooter />
    </div>
  );
}

export default App;
