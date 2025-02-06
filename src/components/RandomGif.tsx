import '../App.css'

import gif0 from '../assets/lol0.gif';
import gif1 from '../assets/lol1.gif';
import gif2 from '../assets/lol2.gif';
import gif3 from '../assets/lol3.gif';
import gif4 from '../assets/lol4.gif';
import gif5 from '../assets/lol5.gif';
import gif6 from '../assets/lol6.gif';

function RandomGif() {
  const num:number = Math.round(Math.random() * 6);

  const gifs = [gif0, gif1, gif2, gif3, gif4, gif5, gif6];

  return (
    <img src={gifs[num]} alt="LOL GIF"/>
  )
}

export default RandomGif