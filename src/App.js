import React from 'react';
import './App.css';
import data from './data.js';
import CreaturesHeader from './CreaturesHeader.js';
import CreaturesImageList from './CreaturesImageList.js';
import CreaturesFooter from './CreaturesFooter.js';

class App extends React.Component {
  state = {
    hornFilter: 'All',
    keywordFilter: 'All',
  }

  horns = ['All', 1, 2, 3, 100];
  keywords = [
    'All',
    'narwhal',
    'rhino',
    'unicorn',
    'unilego',
    'triceratops',
    'markhor',
    'mouflon',
    'addax',
    'chameleon',
    'lizard',
    'dragon',
  ];

  updateState = (obj) => {
    this.setState(obj)
  }

  render() {
    return (
      <div>
        <CreaturesHeader horns={this.horns} keywords={this.keywords} onDropdownSelect={this.updateState} />
        <CreaturesImageList data={data} filterData={this.state} />
        <CreaturesFooter />
      </div>
    );
  }
}
export default App;
