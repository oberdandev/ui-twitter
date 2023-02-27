import { useState } from "react";

interface TweetProps {
  user: string;
  children: string;
  likes?: number;
}

const tweetStyles = {
  borderRadius: '8px',

}

function Tweet(props: TweetProps) {
  const [likes, setLikes] = useState(0)

  return (
    <>
    <div className="tweet" style={tweetStyles}>
      <h2>{props.user}</h2>
     <h4>{props.children}</h4> 
      <button onClick={()=> setLikes((likes)=> likes + 1)}>Like {likes} </button>
    </div>
    </>
  )
}

export default Tweet