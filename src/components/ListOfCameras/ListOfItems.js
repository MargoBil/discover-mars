import React from 'react';
import {v4 as uuidv4} from 'uuid';
import {Chip} from '@rmwc/chip';
import '@rmwc/chip/styles';

export const ListOfItems = ({cameras, onClick}) => {
  cameras.map(camera => {
    return {value: camera, label: camera};
  });
  return (
    <div style={{width: '100%', display: 'flex', justifyContent:'center', flexWrap: 'wrap'}} >
      <h2 style={{fontSize: '16px', color: 'gray', width: '100%', textAlign: 'center', fontWeight:'400', marginBottom:'0px'}}>select camera</h2>
      <ul style={{ display: 'flex', justifyContent:'center', flexWrap: 'wrap', paddingLeft:'0px'}}>
        {cameras.map(camera => {
          return (
            <Chip style={{margin: '5px'}} onClick={onClick} key={uuidv4()}>
              {camera}
            </Chip>
          );
        })}
      </ul>
    </div>
  );
};
