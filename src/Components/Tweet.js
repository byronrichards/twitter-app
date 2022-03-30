import React,{useState} from "react";


const Tweet = (props) => {

    const [isLiked, setLike] = useState("https://www.freepnglogos.com/uploads/heart-png/heart-image-13.png");

    return(

        <div>

        <div className="info-container">
            <p>{props.author}</p>
            <p>{props.date}</p>
            <p>{props.content}</p>

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

   
    </div>
    )
}

export default Tweet;