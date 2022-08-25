import "./Styles/Tweet.css";
import React, {useState} from 'react';
import Header from "./Components/Header.js";
import Likess from "./Components/Likess.js";
import Time from "./Components/Time.js";


function App() {


  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const [content, setContent] = useState("");

  const [post, setPost] = useState([]);

  document.body.style.backgroundColor = "rgb(71, 147, 222)";

  return (

    <div>


    <div>
        <Header/>
    </div>

    <div className="container-to-post">

      <p>Author:</p> <p><input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} /></p>
      <p>Date:</p> <p><input type="text" value={date} onChange={(e) => setDate(e.target.value)} /></p>
      <p>Content:</p> <p><input type="text" value={content} onChange={(e) => setContent(e.target.value)} /></p>

      <button 
        onClick={() => {
          setPost([...post, { author: author, 
                              date: date, 
                              content: content }]);

          setContent("");
          setDate("");
          setAuthor("");

        }}
      >
        Post Tweet
      </button>

    </div>

    
    <div>


      {post.map((props) =>

    <div className="input-container">

        <Time/>

        <p>Author: {props.author}</p>
        <p>Date: {props.date}</p>
        <p>{props.content}</p>

        <Likess/>
    
  </div>

      )}

  </div>
      

  </div>


  );
      }


export default App;
