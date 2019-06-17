import React from 'react';

const ShowToDo = props => (
  <div className='show'>
    <li onClick={props.deleteTodo.bind(this,props.showlistidx)}>
    {props.showlist}
    </li>
  </div>
); 
  
  export default ShowToDo;