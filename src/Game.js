import React from "react";
import './game.css';
import { useSelector, useDispatch} from "react-redux";
import store from ".";
import {
 Link
} from "react-router-dom";
import { NextSymbol } from "./Logic";
import { ClearTable } from "./Logic";
var buttonArr = Array(9).fill('');
function Game (){
    const draw = useSelector(state => state.draw) ;   
    const dispatch = useDispatch();
    store.subscribe(() => console.log(store.getState()));
    let arr = Array(9).fill('');
    return( 
    <div className="game">
      <h1 id="gameover">{null}</h1>
      <h3 id="turn">Turn: {draw}</h3>
      <h3 id="winner">{null}</h3>
      <div className="board">
        {
          arr.map((value,index) =>{
            return <button key={index} id={index} className='placeMark' onClick={() => NextSymbol(index,dispatch,draw,buttonArr)}>{buttonArr[index]}</button>
          }
          )}
     </div>
          <div>
            <button className="clear" onClick={() => ClearTable(dispatch,buttonArr,draw)}>Clear</button>
            <Link to="/">
              <button className='homeBtn' onClick={() => ClearTable(dispatch,buttonArr,draw)} >
                Home
              </button>
            </Link>
          </div> 
    </div>
    )
  }
export default Game;