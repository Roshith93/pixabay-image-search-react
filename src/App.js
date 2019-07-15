import React,{Component} from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import  NavBar from './components/AppBar'       
import  {PixabayConsumer} from './components/Context'
import SearchBar from './components/SearchBar'



class App extends Component {
  render(){
  return (
     <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
         <NavBar />
         <SearchBar />
      </Container>
    </React.Fragment>
  );
}
}

export default App;
