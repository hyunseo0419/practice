import React from 'react';

const category = props => (
  <div className='categoryHead'>
    <div className='categorylist'>
      <span onClick={props.onCLickCategory.bind(this,props.catesidx)} >
      *{props.cates}
      </span>
      <button className='catedelete' onClick={props.deleteCate.bind(this,props.catesidx)}>
        x
      </button>
    </div>
  </div>
); 
  
  export default category;