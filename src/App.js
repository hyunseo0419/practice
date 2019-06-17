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
      category : [ { name: "Today" , todos: [] } ],
      alltodo : [],
      searchWords : '',
      searchResult : [],
      date : new Date().toLocaleTimeString()
    };
    this.searchInput = debounce(this.searchInput,700);
    this.timer = this.timer.bind(this)
  }

  // time handle

  timer(){
    this.setState({
      date : new Date().toLocaleTimeString()
    })
  }

  componentWillMount(){
    setInterval(this.timer,1000)
  }


  // onchange function

  handleChange(e){
    this.searchInput(e.target)
  }

  searchInput(e){
    let result = [];
    
    console.log("search start")// [eat some pizza,eat]
    
    this.state.alltodo.forEach(words => {
      // searchResult[i]
      let word = words.split(' ')
      // eat , some , pizza
      word.forEach(chars => {
        if(chars === e.value){ 
          result.push(words) 
          this.setState({
            searchResult : result })
        }
        })
    })
  };


  // click function 

  clearSearch=()=>{
    this.setState({
      searchResult : []
    })
  }

  onCLickCategory = (idx) => {
    this.setState({
      num : idx
    })
  }

  deleteCate = (idx) => {
    if(this.state.category.length > 1){
    let origincate = this.state.category
    origincate.splice([idx],1);
    this.setState({
      category : origincate
    })
  }
  }

  deleteTodo = (idx) => {
    let originTodos = this.state.category[this.state.num].todos
    originTodos.splice(idx,1);
    this.state.category[this.state.num].todos = originTodos
    this.setState({
      category : this.state.category,
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
    

 // deleteCate = (e) => {
  //   if (e.key === 'Escape') {
  //     console.log('esc run')
  //     let origincate = this.state.category
  //     origincate.splice([this.state.num], 1);
  //     this.state.category = origincate
  //     this.setState({
  //       category: this.state.category,
  //     })
  //   }
  // }
  // }https://gfycat.com/flickeringspecificeastrussiancoursinghounds

  //  category : [...this.state.category,
  //this.state.category[this.state.num].todos.concat(e.target.value)]
  render() {
  
    return (
      <div className='kingbox'>
        <div className="centerbox">
          <h2 className="title">  
             To Do list 
          </h2>
          <div className="timeNow">
             {this.state.date}
          </div>
        </div>  

              
          <div className="leftbox">
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
                           onCLickCategory={this.onCLickCategory}
                           deleteCate={this.deleteCate}
                           statenum={this.state.num}/>))}
            </div>

            <div className='searchbar'>
                < SearchBar searching={this.handleChange.bind(this)}
                            clearSearch={this.clearSearch}
                            result={this.state.searchResult}/>
            </div>
        </div>

        <div className="left2box">      
          <div className="todos">
                < WriteToDo addToDoKey={this.addToDoKey}/>
                {this.state.category[this.state.num].todos.map((el,idx)=>(
                < ShowToDo showlist={el}
                           showlistidx={idx}
                           deleteTodo={this.deleteTodo}
                 />))}
          </div>
        </div>
          
        <div className="botbox">
          <div className='linkbtn'>
                < LinkBtn />
          </div>
        </div>  

{/* 이미지 파일 드러갈 예정 */}

      </div>
    )
  
  }
}

export default App;
