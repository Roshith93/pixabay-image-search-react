import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import {PixabayConsumer} from './Context'


class SearchBar extends Component {
  render() {
    return (
      <PixabayConsumer>
        {value => {
            const {amount, searchText, onAmountChange, onTextChange} = value;
          return(
              <React.Fragment>
                    <TextField
                    name="searchText"
                    onChange={onTextChange}
                    value={searchText}
                    id="standard-dense"
                    label="Dense"
                    margin="dense"
                    fullWidth={true}
                    
                  />
                  <TextField
                    select
                    name="amount"
                    value={amount}
                    onClick={onAmountChange}
                    label="Search"
                    name="searchText" 
                    >
                    <MenuItem key={1} value={5}>5</MenuItem>
                    <MenuItem key={2} value={10}>10</MenuItem>
                    <MenuItem key={3} value={15}>15</MenuItem>
                  </TextField>

              </React.Fragment>
          )
        }}
      </PixabayConsumer>
    )
  }
}

export default SearchBar
