import React from 'react';

const ShowToDo = props => (
  <div className='show'>
    <li>
    {props.showlist}
    </li>
  </div>
); 
  
  export default ShowToDo;