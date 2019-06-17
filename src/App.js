import React, { Component } from 'react';
import Category from "./Category";
import LinkBtn from './LinkBtn';
import WriteToDo from './WriteToDo';
import ShowToDo from './ShowToDo';
import SearchBar from './SearchBar';
import debounce from "lodash.debounce";
//import update from 'react-addons-update'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      num : 0,
      category : [{name: "오늘",todos: []} ],
      alltodo : [],
      searchWords : '',
      searchResult : []
    };
    this.searchInput = debounce(this.searchInput,1000);
  }

  // onchange function
  handleChange(e){
    this.searchInput(e.target)
  }

  searchInput(e){
    console.log("search start")// [eat some pizza,eat]
    let result = [];
    this.state.alltodo.forEach(words => {
      // searchResult[i]
      let word = words.split(' ')
      // eat , some , pizza
      word.forEach(chars => {
      let char = chars.split('')
      // e , a ,t   
      word.forEach(char => {  
        if(char === e.value){ 
          result.push(words) 
          this.setState({
            searchResult : result })
        }
        })
      })
    })
  };


  // click function 
  onCLickCategory = (idx) => {
    this.setState({
      num : idx
    })
  }


  // key function
  addToDoKey = (e) => {
    if(e.key === 'Enter' && e.target.value.length!==0){
      let originTodos = this.state.category[this.state.num].todos
      originTodos.push(e.target.value);
      this.state.category[this.state.num].todos.concat(originTodos)
      this.setState({
        category : this.state.category,
        alltodo : this.state.alltodo.concat(e.target.value)
    })
    e.target.value = null;
    }
  }


  addCategoryKey = (e) => {
    if(e.key === 'Enter'&& e.target.value.length!==0 ){
        this.setState({
          category : this.state.category.concat(
            { name: e.target.value , todos: []})
        })
        console.log(this.state.category)
        e.target.value = null;
    }
  }
    


  // }https://gfycat.com/flickeringspecificeastrussiancoursinghounds
  //  category : [...this.state.category,this.state.category[this.state.num].todos.concat(e.target.value)]
  render() {
  
    return (
      <div className="App-head">
          <h2 className="title">  
             To Do list
            </h2> 
<br/>
              
              <div className="cateinput" >
                  <input className="cateInput" type="text" 
                    placeholder="add category"
                    onKeyPress={this.addCategoryKey}/>
              </div>
          <div className="catelist">
              {this.state.category.map((el,idx)=>(
                < Category cates={el.name}
                           catesidx={idx} 
                           key = {idx}
                           onCLickCategory={this.onCLickCategory}/>))}
          </div>
<br/>
          <div className='searchbar'>
                < SearchBar searching={this.handleChange.bind(this)}/>
          </div>
              <br/>
          <div className="todos">
                < WriteToDo addToDoKey={this.addToDoKey}/>
                {this.state.category[this.state.num].todos.map((el,idx)=>(
                < ShowToDo showlist={el}
                           showlistidx={idx}
                 />))}
          </div>
<br/>
          <div className='linkbtn'>
                < LinkBtn />
          </div>
      </div> 
    );
  
  }
}

export default App;
