import { Link } from "react-router-dom";
const Home = () =>{
    return(
        <div className="main">
            <div className="main-context">
            <h2>Generate a story about ...</h2>
            <input type="text" placeholder="Write your story title"/>
            <Link to='/page'><button className="generate">Generate Story</button></Link>
            </div>
        </div>
    )
};

export default Home