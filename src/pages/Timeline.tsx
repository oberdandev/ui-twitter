import { FormEvent, useState } from "react"
import Header from "../components/Header"
import Separator from "../components/Separator"
import Tweet from "../components/Tweet"

import './Timeline.css'

let newTweet = ''

export function Timeline() {


  const [newTweet, setNewTweet] = useState('')
  const [tweets, setTweets] = useState([
    'Meu primeiro tweet',
    'Meu Segundo tweet',
    'Terceiro tweet'
  ])

   function createNewTweet(event: FormEvent){
    event.preventDefault()
    
      setTweets([newTweet, ...tweets])
      setNewTweet('')
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
        value = {newTweet}
        onKeyDown={handleKey}
        onChange={(event)=> 
        setNewTweet(event.target.value)} 
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