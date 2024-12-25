import "./Leftbar.scss"

import Friends from "../../assets/1.png";
import Groups from "../../assets/2.png";
import Market from "../../assets/3.png";
import Watch from "../../assets/4.png";
import Memories from "../../assets/5.png";
import Events from "../../assets/6.png";
import Gaming from "../../assets/7.png";
import Gallery from "../../assets/8.png";
import Videos from "../../assets/9.png";
import Messages from "../../assets/10.png";
import Tutorials from "../../assets/11.png";
import Courses from "../../assets/12.png";
import Fund from "../../assets/13.png";

function Leftbar(){
    const imagestyle = {
        width: 25,
        height: 25
    }
    return(
    <div className="Leftbar">

        <div className="Container">
            <div className="Items">
                <img src={Friends} alt="" style={imagestyle}/>
                <span>Friends</span>
            </div>
            <div className="Items">
                <img src={Groups} alt="" style={imagestyle} />
                <span>Groups</span>
            </div>
            <div className="Items">
                <img src={Market} alt="" style={imagestyle} />
                <span>Marketplace</span>
            </div>
            <div className="Items">
                <img src={Watch} alt="" style={imagestyle} />
                <span>Watch</span>
            </div>
            <div className="Items">
                <img src={Memories} alt="" style={imagestyle} />
                <span>Memories</span>
            </div>
        </div>

        <hr />

        <div className="Container">
            <span style={{fontSize: 14}}>Your shortcuts</span>
            <div className="Items">
                <img src={Events} alt="" style={imagestyle} />
                <span>Events</span>
            </div>
            <div className="Items">
                <img src={Gaming} alt="" style={imagestyle} />
                <span>Gaming</span>
            </div>
            <div className="Items">
                <img src={Gallery} alt="" style={imagestyle} />
                <span>Gallery</span>
            </div>
            <div className="Items">
                <img src={Videos} alt="" style={imagestyle} />
                <span>Videos</span>
            </div>
            <div className="Items">
                <img src={Messages} alt="" style={imagestyle} />
                <span>Messages</span>
            </div>
        </div>

        <hr />

        <div className="Container">
            <span style={{fontSize: 14}}>Others</span>
            <div className="Items">
                <img src={Tutorials} alt="" style={imagestyle} />
                <span>Tutorials</span>
            </div>
            <div className="Items">
                <img src={Courses} alt="" style={imagestyle} />
                <span>Courses</span>            
            </div>
            <div className="Items" >
                <img src={Fund} alt="" style={imagestyle} />
                <span>Fundraiser</span>
            </div>
        </div>
    </div>
    )
}

export default Leftbar