import { FormEvent, useState } from "react"
import Header from "../components/Header"
import Separator from "../components/Separator"
import Tweet from "../components/Tweet"

import './Timeline.css'

let newTweet = ''

export function Timeline() {

  const [tweets, setTweets] = useState([
    'Meu primeiro tweet',
    'Meu Segundo tweet',
    'Terceiro tweet'
  ])

   function createNewTweet(event: FormEvent){
    event.preventDefault()
    
      setTweets([newTweet, ...tweets])
   }

   function handleKey(e) {
    {if(e.key == 'Enter') {
      e.preventDefault();
      console.log('click on enter')
      {createNewTweet}
    }}
   }
  
  return (
    <main className="timeline">
    <Header title='Home'/>

    <form 
    onSubmit={createNewTweet} className="new-tweet-form">
      <label htmlFor="tweet">
        <img src="https://github.com/oberdandev.png" alt="" />
        <textarea 
        onKeyDown={handleKey}
        onChange={(event)=> 
        newTweet=event.target.value} 
        id="tweet" autoFocus placeholder="What's happening?"></textarea>
      </label>

      <button 
      type="submit">Tweet</button>
    </form>

    <Separator />

    {tweets.map((tweet)=> {
      return <Tweet key={tweet} content={tweet} />
    })}
  </main>
  )
}