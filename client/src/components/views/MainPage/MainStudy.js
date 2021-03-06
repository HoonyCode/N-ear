import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './MainStudy.scss';


const MainStudy = () => {
  

  return <div>

{/* <Container> */}
<div class="background">

  <div class="board">
    <div class="board-eiffel"></div>
    <div class="board-tree"></div>
    <div class="board-boat"></div>
    <div class="board-gingerbreadman"></div>
    <div class="board-bigben"></div>
    <div class="board-cat"></div>
  </div>
  
  <div class="thunderbolt">
    <div class="thunderbolt-footrest"></div>
  </div>
  
  <div class="lamp">
    <div class="lamp-light"></div>
    <div class="lamp-switch"></div>
    <div class="lamp-chord-left"></div>
    <div class="lamp-chord-right"></div>
  </div>
  
  <div class="cup">
    <div class="cup-straw"></div>
  </div>
  
  <div class="notebook"></div>
    
  <div class="pencil"></div>
  
  <div class="eraser"></div>
  
  <div class="keyboard"></div>
  
  <div class="mouse"></div>
  
  <div class="tablet">
    <div class="tablet-to-thunderbolt"></div>
  </div>
  
  <div class="desk">
    <div class="desk-ordners"></div>
    <div class="desk-book1"></div>
    <div class="desk-book2"></div>
    <div class="desk-book3"></div>
  </div>
  
  <Link to="/finger/1" class="finger"></Link>
  <div class="sign"></div>
  <Link to="/finger/1" class="fingerbtn" style={{display:'flex', flexDirection:'column-reverse',justifyContent: 'center', alignItems: 'center',fontSize:'2vh', color:'white'}}>학습하기</Link>
<Link to="/sign" class="signbtn" style={{display:'flex', flexDirection:'column-reverse',justifyContent: 'center', alignItems: 'center',fontSize:'2vh', color:'white'}} >학습하기</Link>
  <div class="glasses">
      <div class="glasses-left"></div>
      <div class="glasses-right"></div>
  </div>

{/* </Container> */}
<div class="backgrounddesk"></div>
</div>
</div>;
};

export default MainStudy;
