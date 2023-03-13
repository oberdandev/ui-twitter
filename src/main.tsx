import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import twitterLogo from './assets/twitter-logo.svg'
import {House, Hash, Bell, EnvelopeSimple, BookmarkSimple, User, List, FileText, File, Sparkle} from 'phosphor-react'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className='layout'>
      
      <aside className="sidebar">
        <img src={twitterLogo} className="logo" alt="logo" />
        <nav className="main-navigation">
          <a className="active" href="">
            <House weight="fill"/>
            Home</a>
          <a href="">
            <Hash />
            Explore</a>
          <a href="">
            <Bell />
            Notifications</a>
          <a href="">
            <EnvelopeSimple />
            Messages</a>
          <a href="">
            <BookmarkSimple />
            Bookmars</a>
          <a href="">
            <FileText />
            Lists</a>
          <a href="">
            <User />
            Profile</a>
          <a href="">More</a>
        </nav>
        <button className="new-tweet" type="button">Tweet</button>
      </aside>

      <div className="content">
        <main className="timeline">
          <div className="timeline-header">
            Home
            <Sparkle />            
          </div>

          <form className="new-tweet-form">
            <label htmlFor="tweet">
              <img src="https://github.com/oberdandev.png" alt="" />
              <textarea name="" id="tweet" autoFocus placeholder="What's happening?"></textarea>
            </label>

            <button type="submit">Tweet</button>
          </form>

          <div className="separator"></div>
        </main>
      </div>
    
    </div>
  </React.StrictMode>,
)
