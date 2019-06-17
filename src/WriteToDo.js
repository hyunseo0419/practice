import React from 'react';

class WriteToDo extends React.Component {
  constructor(props){
    super(props);
        this.state = {   
        }
  }

  render(){
    return (
      <div className='writetodo'>
        <div className="input" >
                  <input className="listInput" type="text" placeholder="add to do"
                    onKeyPress={this.props.addToDoKey}/>
               </div>
      </div>
    )
  }
}; 
  
  export default WriteToDo;