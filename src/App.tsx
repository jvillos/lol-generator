import './App.css'
import Header from './components/Header'
import Button from './components/Button'
import JokeDisplay from './components/JokeDisplay'
import { useState } from 'react'
import {Joke} from './types/interfaces';
import { getRandomJoke } from './services/jokeApi'

function App() {
  const [joke, setJoke] = useState<Joke | null>(null)

  const onClickHandler = async () => {
    getRandomJoke().then((joke)=>{
      setJoke(joke)
    })
    setJoke(joke);
  }
  return (
    <>
      <div className="app">
        <Header />
        <Button text='Get Joke' onClick={onClickHandler}/>
        {joke && <JokeDisplay joke={joke}/>}
      </div>
    </>
  )
}

export default App
