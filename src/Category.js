import React from 'react';

const category = props => (
  <div className='categoryHead'>
    <div className='categorylist'>
      <li onClick={props.onCLickCategory.bind(this,props.catesidx)}>
      {props.cates}</li>
    </div>
    <div>

    </div>
  </div>
); 
  
  export default category;