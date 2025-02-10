import '../App.css'
import { Joke } from '../types/interfaces'
import Button from './Button'
import { useState } from 'react'
import { useEffect } from 'react'
import RandomGif from './RandomGif';
import errorImage from '../assets/sad-pikachu.gif'

export interface JokeDisplayProps {
  joke: Joke;
}

function JokeDisplay({ joke }: JokeDisplayProps) {
  const [clickedButton, setClickedButton] = useState<boolean>(false);

  useEffect(() => {
    setClickedButton(false); 
  }, [joke]);

  const onClickHandlerDisplay = () => {
      setClickedButton(true)
    }

  return (
    <>
      <h5>{joke.setup}</h5>
      <Button text='Show me' onClick={onClickHandlerDisplay}/>
      {clickedButton && 
        <div>
          <h5>{joke.punchline}</h5>
          <RandomGif />
        </div>
      }
      {!joke && <div><img src={errorImage} alt="Pikachu" /></div>}
      
    </>
  )
}

export default JokeDisplay