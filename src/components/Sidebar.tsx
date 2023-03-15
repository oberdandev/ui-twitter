import {House, Hash, Bell, EnvelopeSimple, BookmarkSimple, User, FileText, Sparkle, DotsThreeOutline} from 'phosphor-react'
import { Link, NavLink } from 'react-router-dom'
import twitterLogo from '../assets/twitter-logo.svg'
import './Sidebar.css'

function Sidebar () {
  return (
    <>
          <aside className="sidebar">
        <img src={twitterLogo} className="logo" alt="logo" />
        <nav className="main-navigation">
          <NavLink to ='/'>
            <House weight="fill"/>
            Home</NavLink>
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
          <a href="">
            <DotsThreeOutline />  
            More</a>
        </nav>
        <button className="new-tweet" type="button">Tweet</button>
      </aside>
    </>
  )
}

export default Sidebar