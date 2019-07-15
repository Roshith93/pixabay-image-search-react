import React from 'react';
import './App.css';
import  NavBar from './components/AppBar'
import  {PixabayConsumer} from './components/Context'
import SearchBar from './components/SearchBar'

function App() {
  return (
    <React.Fragment>
     <NavBar />
     <SearchBar />
      <PixabayConsumer>
        {h => console.log(h.searchText)}
      </PixabayConsumer>
     </React.Fragment>
  );
}

export default App;
