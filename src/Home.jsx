import { useEffect , useState } from "react";
import { Link } from "react-router-dom";
const Home = () =>{
    const[story , setStory] = useState('')
    useEffect(() => {
        requestStory();
    }, []);
      
    async function requestStory() {
        const res = await fetch(
          `http://localhost:5000/api/story?`
        );
        const json = await res.json();
        console.log(json)
        // setStory(json.story);
    }
    return(
        <div className="main">
            <div className="main-context">
            <h2>Generate a story about ...</h2>
            <input 
            type="text" 
            placeholder="Write your story title"
            id="story"
            onChange={(e) => setStory(e.target.value)}
            />
            <Link to='/page'><button className="generate">Generate Story</button></Link>
            </div>
        </div>
    )
};

export default Home