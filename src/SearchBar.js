import React from 'react';

const SearchBar = props => (
  <div className='search'>
    <input className='searchinput' type='text' 
      placeholder='search plan' onChange={props.searching}/>
      <div>
    <button className="searchoff"
    onClick={props.clearSearch}
    >search off</button>
      </div>
      <div>
          
          {props.result}
        
      </div>
  </div>
); 
  
  export default SearchBar;