import React from 'react';
import './App.css';
import  NavBar from './components/AppBar'
import  {PixabayConsumer} from './components/Context'

function App() {
  return (
    <React.Fragment>
     <NavBar />
     <PixabayConsumer>
       {value => value}
     </PixabayConsumer>
     </React.Fragment>
  );
}

export default App;
