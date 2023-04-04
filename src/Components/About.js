import React, { useEffect, useState } from 'react'


export function About() {
  const [quote, setQuote] = useState("quote...")
  const [imgUrl, setImgUrl] = useState("")
  

  useEffect(() => {
      fetch('https://api.quotable.io/random')
        .then ((response) => response.json())
        .then ((data) => {
          setQuote(data)
        })

  }, [])



  
  return (
    <div className="content">
        <h1>About</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div id="quote">{quote.content}</div>
        <div>{quote.author}</div>


    </div>
  );
}