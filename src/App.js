import React,{Component} from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import  NavBar from './components/AppBar'       
import  {PixabayConsumer} from './components/Context'
import SearchBar from './components/SearchBar'
import ImageResults from './components/ImageResults'


class App extends Component {
  render(){
  return (
     <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
         <NavBar />
         <SearchBar />
         <PixabayConsumer>
          {value => {
            const {images} = value;
            return images.length !==0 ?  <ImageResults images={images} /> : null
          }}
         </PixabayConsumer>
      </Container>
    </React.Fragment>
  );
}
}

export default App;
