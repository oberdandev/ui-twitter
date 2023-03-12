import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import twitterLogo from './assets/twitter-logo.svg'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className='layout'>
      <aside className="sidebar">
        <img src={twitterLogo} className="logo" alt="logo" />
        <nav className="main-navigation">
          <a>home</a>
        </nav>
        <button className="new-tweet" type="button">Tweet</button>
      </aside>
      <div className="content">
        content
      </div>
    </div>
  </React.StrictMode>,
)
