import "./Styles/Tweet.css";

import React, {useState} from 'react';
import Body from "./Components/Body.js";
import Header from "./Components/Header.js";

function App() {

  const [isLiked, setLike] = useState("https://www.freepnglogos.com/uploads/heart-png/heart-image-13.png");


  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const [content, setContent] = useState("");

  const [post, setPost] = useState([]);

  return (

    <div>


      <div>
        <Header/>
      </div>

      <div>
        <Body/>
      </div>

      <div>
      <input value={author} onChange={e => setAuthor(e.target.value)} />
      <input value={date} onChange={e => setDate(e.target.value)} />
      <input value={content} onChange={e => setContent(e.target.value)} />

      <button
        onClick={() => {
          setPost([...post, { author: author, date: date, content: content }]);

          setContent("");
          setDate("");
          setAuthor("");

        }}
      >
        Post Tweet
      </button>

      {post.map((post, i) => (

        <div className="input-container">
        <p>{post.author}</p>
        <p>{post.date}</p>
        <p>{post.content}</p>

        <button
            onClick={() => {
                setLike(!isLiked)
                }}
                >
                Like
        </button>

        {isLiked? <img src="https://cdn.clipartsfree.net/vector/medium/50152-gray-heart-images.png" width = "50" height = "50"></img>: 
        <img src="https://www.freepnglogos.com/uploads/heart-png/heart-image-13.png" width = "50" height = "50"></img>}
    
        </div>
      ))}
      </div>
      

      </div>


  );
      }


export default App;
