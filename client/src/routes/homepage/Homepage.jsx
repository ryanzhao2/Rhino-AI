import { Link } from 'react-router-dom'
import './homepage.css'
import { TypeAnimation } from 'react-type-animation'
import { useState } from "react";

const Homepage = () => {

  const [typingStatus, setTypingStatus] = useState("human1")

  // const test = async ()=>{
  //   await fetch("http://localhost:3000/api/test", {
  //     credentials: "include"
  //   }
  //   )
  // }

  return (
    <div className='homepage'>
      <img src="/orbital.png" alt="" className="orbital" />
      <div className="left">
      <h1>Rhino AI</h1>
      <h2> Shop Smarter, Not Harder</h2>
      <h3>
      Find the best deals, the highest quality, and everything in between—right at your fingertips
      </h3>
      <Link to="/dashboard">Get Started</Link>
      </div>
      <div className="right">
        <div className="imgContainer">
          <div className="bgContainer">
            <div className="bg"></div>
        </div>
        <img src="/bot.png" alt="" className="bot"/>
        <div className="chat">
          <img src={typingStatus === "human1" 
            ? "/human1.jpeg" 
            : typingStatus === "human2" 
            ? "/human2.jpeg" 
            : "bot.png"} 
            alt="" />
          <TypeAnimation
            sequence={[
              'Your Personal Shopping Assistant, Anytime',
              // wait 1 second before moving to next sentence
              1000, ()=>{
                setTypingStatus("bot")
              },
              'Find, Compare, Buy—With a Chat',
              1000, ()=>{
                setTypingStatus("human2")
              },
              'Instant Product Suggestions, Just a Message Away',
              1000, ()=>{
                setTypingStatus("bot")
              },
              'Say Goodbye to Shopping Overwhelm',
              1000, ()=>{
                setTypingStatus("human1")
              },
              'Shopping Made Simple with AI',
              1000, ()=>{
                setTypingStatus("human2")
              },
            ]}
            wrapper="span"
            speed={50}
            cursor={true}
            repeat={Infinity}
            omitDeletionAnimation={true}
      />
        </div>  
      </div>
    </div>
    <div className="terms">
      <img src="/logo.png" alt="" />
      <div className="links">
        <Link to="/">Terms of Service</Link>
        <Link>Privacy Policy</Link>
        

      </div>
    </div>
    </div>

  )
}

export default Homepage