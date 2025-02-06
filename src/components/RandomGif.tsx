import '../App.css'

function RandomGif() {
  const num:number = Math.round(Math.random() * 6);
  return (
    <img src={`../assets/lol${num}.gif`} alt="LOL GIF"/>
  )
}

export default RandomGif