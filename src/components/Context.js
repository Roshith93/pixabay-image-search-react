import React, { Component } from 'react'
import axios from 'axios'

const PixabayContext = React.createContext();
// This object provids two components names Provider and a Consumer

class PixabayProvider extends Component {
  state = {
    searchText: 'blu',
    amount: '5',
    apiUrl: 'https://pixabay.com/api',
    apiKey: '8935008-0222e7477f421c0ea505f6d42',
    images: []
  }

  onAmountChange = e => {
    const {name, value} = e.target;
    this.setState(()=> {
      return(
        [name]: value 
      )
    })
    console.log("amouc", this.state.amount);
  }

  // api calling 
  getData = async () => {
      try {
        const response = await axios.get(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=true`)
        let data = response.data.hits
        console.log(data)
        this.setState(() => {
          return {
            images: data
          }
        })
      }catch{
        console.log("errror")
      }
  }

  // Search Text
  onTextChange = (e) => {
    const {name, value} = e.target;
      this.setState(() => {
        return {
        [name]:value
        }
      },()=>{
        this.getData()
      })
  }

  render() {
    return (
      <PixabayContext.Provider value={{
        ...this.state,
        onAmountChange: this.onAmountChange,
        onTextChange: this.onTextChange
        }}>
           {this.props.children}
      </PixabayContext.Provider>
    )
  }
}

const PixabayConsumer = PixabayContext.Consumer;
export {PixabayProvider,PixabayConsumer}
