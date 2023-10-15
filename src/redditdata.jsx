import React, { useState, useEffect } from 'react';
import './redditdata.css';

export const RedditData = () => {
  const [redditData, setRedditData] = useState([]);

  useEffect(() => {
    fetch('https://www.reddit.com/r/reactjs.json')
      .then((response) => response.json())
      .then((data) => {
        setRedditData(data.data.children);
      });
  }, []);

  return (
    <div className="reddit-feed">
      {redditData.map((post, index) => (
        <div key={index} className="reddit-card">
          <h2>{post.data.title}</h2>
          <p dangerouslySetInnerHTML={{ __html: post.data.selftext_html }}></p>
          <a href={post.data.url} target="_blank" rel="noopener noreferrer">
            Read More
          </a>
          <p>Score: {post.data.score}</p>
        </div>
      ))}
    </div>
  );
};

// src/RedditFeed.js

// import React, { useState, useEffect } from 'react';

// const RedditFeed = () => {
//   const [redditData, setRedditData] = useState([]);

//   useEffect(() => {
//     fetch('https://www.reddit.com/r/reactjs.json')
//       .then((response) => response.json())
//       .then((data) => {
//         setRedditData(data.data.children);
//       });
//   }, []);

//   return (
//     <div className="reddit-feed">
//       {redditData.map((post, index) => (
//         <div key={index} className="reddit-card">
//           <h2>{post.data.title}</h2>
//           <p dangerouslySetInnerHTML={{ __html: post.data.selftext_html }}></p>
//           <a href={post.data.url} target="_blank" rel="noopener noreferrer">
//             {post.data.url}
//           </a>
//           <p>Score: {post.data.score}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default RedditFeed;
