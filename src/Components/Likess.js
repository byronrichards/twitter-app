import React, {useState} from "react";


const Likess = () => {

    const [count, setCount] = useState(0);

    const imagesPath = {
        gray: "https://cdn.clipartsfree.net/vector/medium/50152-gray-heart-images.png",
        red: "https://www.freepnglogos.com/uploads/heart-png/heart-image-13.png"
    }

    const [img, setImg] = useState(false);


    return(

        <div>

        <div>

        <img src={!img ? imagesPath.gray : imagesPath.red} width = "50" height = "50"
            alt = "heart"
            onClick={() => {
                setImg(!img);
                img === false ? setCount(count+1) : setCount(count-1);
        
                }}
                >
                
        </img>

        </div>

        <div>Likes: {count}</div>

   
    </div>
    )
}

export default Likess;



