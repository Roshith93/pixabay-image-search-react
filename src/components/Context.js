import React, { Component } from 'react'

const PixabayContext = React.createContext();
// Provider
// consumer

class PixabayProvider extends Component {
  render() {
    return (
      <PixabayContext.Provider
      value="Hello from context">
        {this.props.children}
      </PixabayContext.Provider>
    )
  }
}

const PixabayConsumer = PixabayContext.Consumer;
export {PixabayProvider,PixabayConsumer}
