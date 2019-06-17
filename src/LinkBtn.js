import React from "react";

const LinkBtn = props => (
            <div className='linbtns'>
              <button className="learnco" 
              onClick={()=> window.open('https://learnco.codestates.com/Immersive/13/home')}>런코</button>
              
              <button className='calender'
              onClick={()=> window.open('https://calendar.google.com/calendar/r')}>달력</button>
              
              <button className='blog'
              onClick={()=> window.open('https://analogcoding.tistory.com/')}>블로그</button>
            </div>
        )
    

  export default LinkBtn;
  