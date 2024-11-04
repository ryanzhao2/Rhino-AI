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
      <h2> Supercharge your creativity and productivity</h2>
      <h3>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
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
              'Enhancing Conversations, One Chat at a Time',
              // wait 1 second before moving to next sentence
              1000, ()=>{
                setTypingStatus("bot")
              },
              'Your Virtual Assistant, Always Learning, Always Listening',
              1000, ()=>{
                setTypingStatus("human2")
              },
              'Transforming Ideas into Conversations',
              1000, ()=>{
                setTypingStatus("bot")
              },
              'Powered by AI, Driven by Curiosity',
              1000, ()=>{
                setTypingStatus("human1")
              },
              'Smart Conversations, Tailored to You',
              1000, ()=>{
                setTypingStatus("human2")
              },
              'Your Digital Companion, Ready to Assist',
              1000, ()=>{
                setTypingStatus("bot")
              },
              'Intelligence at Your Fingertips',
              1000,
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