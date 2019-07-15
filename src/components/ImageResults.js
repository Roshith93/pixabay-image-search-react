import React, { Component } from 'react'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import GridListTileBar from '@material-ui/core/GridListTileBar';
 
class ImageResults extends Component {
  render() {
      let imageListContent;
      const {images} = this.props
      if(images){
          imageListContent = (
                <GridList 
                    cols={3} 
                    cellHeight={180}
                    >
                {images.map(img => (
                <GridListTile key={img.id}>
                    <img src={img.largeImageURL} alt={img.id} />
                    <GridListTileBar
                    title={img.tag}
                    subtitle={<span>by: {img.user}</span>}
                    actionIcon={
                        <IconButton aria-label={`info about ${img.tags}`}>
                        <InfoIcon />
                        </IconButton>
                    }
                    />
                </GridListTile>
                ))}
                </GridList>
          )
      }
      else{
          imageListContent =  null
      }
      return (

          <div>{imageListContent}</div>
      )
  }
}

export default ImageResults
