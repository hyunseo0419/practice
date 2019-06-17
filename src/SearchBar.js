import React from 'react';

const SearchBar = props => (
  <div className='search'>
    <input className='searchinput' type='text' 
      placeholder='search plan' onChange={props.searching}/>
      <div>

      </div>
  </div>
); 
  
  export default SearchBar;