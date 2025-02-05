import '../App.css'
import { Joke } from '../types/interfaces'
import Button from './Button'

export interface JokeDisplay{
    joke: Joke | null;
}

function JokeDisplay({joke}:JokeDisplay) {
  return (
    <>
        <h5>{joke.setup}</h5>
        <Button text='Show me'  />
        <h5>{joke.punchline}</h5>
    </>
  )
}

export default JokeDisplay