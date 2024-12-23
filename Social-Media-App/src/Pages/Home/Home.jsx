import Stories from "../../Components/Stories/Stories";
import Posts from "../../Components/Posts/Posts";

import "./Home.scss"

function Home(){
    return(
        <div className="Home">
            <Stories></Stories>
            <Posts></Posts>
            
        </div>
    );
}

export default Home