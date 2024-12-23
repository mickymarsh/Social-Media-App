import "./Stories.scss"

import { useContext } from "react";
import { AuthContext } from "../../Context/authContext.jsx"; 


//TEMPORARRY
const stories = [
    {id: 1,
    name: "Gukesh D",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShZA0v7PNAwEZI25uCEDBrwiSZH7nbMKfotw&s"
    },
    {id: 2,
    name: "Gukesh D",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShZA0v7PNAwEZI25uCEDBrwiSZH7nbMKfotw&s"
    },
    {id: 3,
    name: "Gukesh D",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShZA0v7PNAwEZI25uCEDBrwiSZH7nbMKfotw&s"
    },
    {id: 4,
    name: "Gukesh D",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShZA0v7PNAwEZI25uCEDBrwiSZH7nbMKfotw&s"
    },
]

function Stories(){

    const { currentUser } = useContext(AuthContext);

    return(
        <div className="Stories">
            <div className="Story">
                <img src={currentUser.propic}></img>
                <span>{currentUser.name}</span>
                <button>+</button>
            </div>
            {stories.map(story=>(
                <div className="Story" key={story.id}>
                    <img src={story.img}></img>
                    <span>{story.name}</span>
                </div>
            ))} 
        </div>
        
    )
}

export default Stories
