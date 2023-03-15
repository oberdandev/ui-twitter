import { ArrowsClockwise, ChatCircle, Heart } from "phosphor-react";
import "./Tweet.css"
import {Link} from 'react-router-dom'

interface TweetProps {
  content: string
}

function Tweet(props: TweetProps) {
  return (
    <>
    <Link to="/status" className="tweet">
      <img src="https://github.com/oberdandev.png" />
      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>Oberdan Angelim</strong>
          <span>@oberudan</span>
        </div>
          <p>{props.content}</p>
          <div className="tweet-content-footer">
            <button type="button">
              <ChatCircle />
              <p>20</p>
            </button>

            <button type="button">
              <ArrowsClockwise />
              <p>20</p>
            </button>

            <button type="button">
              <Heart />
              <p>20</p>
            </button>
          </div>
        </div>
    </Link>
    </>
  )
}

export default Tweet