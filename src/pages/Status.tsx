import '../pages/Status.css'
import Header from "../components/Header"
import Separator from "../components/Separator"
import Tweet from "../components/Tweet"


const answers = [
  "Concordo...",
  "Olha, faz sentido",
  "Parabéns pelo progresso!",
]


export function Status() {
  return (
    <main className="status">
    <Header title='Tweet'/>
     
    <Tweet content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam incidunt nostrum voluptatem delectus asperiores veritatis, magni distinctio, minima exercitationem ullam temporibus error, fugit aperiam inventore hic eum saepe ducimus cumque."/>
    
    <Separator />

    <form className="answer-tweet-form">
      <label htmlFor="tweet">
        <img src="https://github.com/oberdandev.png" alt="" />
        <textarea name="" id="tweet" autoFocus placeholder="Tweet your asnwer"></textarea>
      </label>

      <button type="submit">Answer</button>
    </form>



    {answers.map((answer)=> {
      return <Tweet key={answer} content={answer}/>
    })}
  </main>
  )
}