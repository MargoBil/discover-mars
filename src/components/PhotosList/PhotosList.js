import React from 'react';
import {Button} from '@rmwc/button';
import {ImageList, ImageListItem} from '@rmwc/image-list';
import '@rmwc/button/styles';
import '@rmwc/elevation/styles';
import '@rmwc/image-list/styles';

export const PhotosList = ({viewable, photos, onClick}) => {
  console.log(viewable)
  return (
    <>
      <ImageList
        masonry
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          width: '100%',
          columnGap: '10px',
        }}
      >
        {photos.map(photo => {
          return (
            <ImageListItem style={{display:'flex', FlexDirection:'row-reverse'}} key={photo.id}>
              <img src={photo.img_src} style={{marginBottom:'10px'}} alt='' width="300px" />
            </ImageListItem>
          );
        })}
      </ImageList>
      <div style={{width: '100%', display:'flex', justifyContent: 'center'}}>
        {viewable && <Button onClick={onClick}>Load more...</Button>}
      </div>
    </>
  );
};
