import React from 'react';
 
export function Home() {
  return (
    <div className="content">
        <h1>Home Page</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        <div>
          <img src="https://picsum.photos/300/300?random=1&grayscale"/>
          <img src="https://picsum.photos/300/300?random=2&grayscale"/>
          <img src="https://picsum.photos/300/300?random=3&grayscale"/>
          <img src="https://picsum.photos/300/300?random=4&grayscale"/>
        </div>
    </div>
  );
}