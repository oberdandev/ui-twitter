import Header from "../components/Header"
import Separator from "../components/Separator"
import Tweet from "../components/Tweet"
import './Timeline.css'

const tweets = [
  'meu primeripo weet',
  'meu segundo tweet',
  'meu terceiro tweet',
  'meu quarto tweet',
  'um texto grande e maior ainda!!!'
]

const user = [
  {name: 'oberdan',
  id: '13131313',
  tweets: 0,
},
]

export function Timeline() {
  return (
    <main className="timeline">
    <Header title='Home'/>

    <form className="new-tweet-form">
      <label htmlFor="tweet">
        <img src="https://github.com/oberdandev.png" alt="" />
        <textarea name="" id="tweet" autoFocus placeholder="What's happening?"></textarea>
      </label>

      <button type="submit">Tweet</button>
    </form>

    <Separator />

    {tweets.map((tweet)=> {
      user[0].tweets = user[0].tweets + 1
      console.log('tweetID', user[0].tweets)
      return <Tweet key={user[0].tweets} content={tweet} />
    })}
  </main>
  )
}