import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import Tweet from './components/Tweet'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Separator from './components/Separator'
import {RouterProvider} from 'react-router-dom';
import {router} from './routes'

const tweets = [
  'meu primeripo weet',
  'meu segundo tweet',
  'meu terceiro tweet',
  'meu quarto tweet'
]


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className='layout'>
    <Sidebar />

      <div className="content">
        <main className="timeline">
          <Header title='Home'/>


          <RouterProvider router={router}/>
          
          <form className="new-tweet-form">
            <label htmlFor="tweet">
              <img src="https://github.com/oberdandev.png" alt="" />
              <textarea name="" id="tweet" autoFocus placeholder="What's happening?"></textarea>
            </label>

            <button type="submit">Tweet</button>
          </form>

          <Separator />

          {tweets.map((tweet)=> {
            return <Tweet key={tweet} content={tweet} />
          })}
          
          <Tweet content='tweet 1'/>
          <Tweet content='tweet 1'/>
          <Tweet content='tweet 1'/>
          <Tweet content='tweet 1'/>

        </main>
      </div>
    
    </div>
  </React.StrictMode>,
)
