import React from 'react'
import "./Recommended.css";
import Buttons from '../Components/Buttons';

function Recommended({handleClick}) {
  return <>
    <div>
      <h2 className='recommended-title'>Recommended</h2>
      <div className='recommended-btns'>
      <Buttons onClickHandler={handleClick} value="" title="All Products"/>
        <Buttons onClickHandler={handleClick} value="Nike" title="nike"/>
        <Buttons onClickHandler={handleClick} value="Adidas" title="adidas"/>
        <Buttons onClickHandler={handleClick} value="Puma" title="puma"/>
        <Buttons onClickHandler={handleClick} value="Vans" title="vans"/>
      </div>
    </div>
  </>
}

export default Recommended;