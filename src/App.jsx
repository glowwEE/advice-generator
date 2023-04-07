import * as API from './services/Advices';
import { useEffect, useState } from 'react';
import dice from './assets/icon-dice.svg';
import dividerDesktop from './assets/patterrn-divider-desktop.svg';
import divderMobile from './assets/pattern-divider-mobile.svg';
import './App.css';

export default function App() {
  const [advice, setAdvice] = useState()

  useEffect(() => {
    API.GetAdvice().then(setAdvice)
  }, [])

  const rollDice = () => {
    API.GetAdvice().then(setAdvice);
    const diceImg = document.getElementById('dice-img');
    diceImg.classList.add('roll');
    setTimeout(() => diceImg.classList.remove('roll'), 500);
  }

  if(!advice) {
    return (
      <div className='card'>
        <p className='card__title'>advice</p>
        <p className='card__text'>Loading...</p>
        <picture>
          <source srcSet={dividerDesktop} media='(min-width: 600px)'/>
          <img src={divderMobile} alt='divider' />
        </picture>
        <div   className='card__btn' onClick={rollDice}>
          <img id='dice-img' src={dice} alt='dice' />
        </div>
      </div>
    )
  }

  return (
    <div className='card'>
      <p className='card__title'>advice # {advice.id}</p>
      <p className='card__text'>"{advice.advice}"</p>
      <picture>
        <source srcSet={dividerDesktop} media='(min-width: 600px)'/>
        <img src={divderMobile} alt='divider' />
      </picture>
      <div  onClick={rollDice} className='card__btn'>
        <img id='dice-img' src={dice} alt='dice' />
      </div>
    </div>
  )
}
