import { useEffect, useState } from "react";

const Home = () => {
  const [title, setTitle] = useState('');
  const [story, setStory] = useState('')
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setStory('');
  }, []);

  async function requestStory() {
    try {
      setLoading(true);
      const encodedTitle = encodeURIComponent(title);
    
      const res = await fetch(`http://localhost:5000/api/story?title=${encodedTitle}`);
    
      const json = await res.json();
      console.log(json.choices[0].text);
      setStory(json.choices[0].text); 
    } catch (error) {
      console.error("Error fetching story:", error);
    } finally {
      setLoading(false); 
    }
  }

  const generateStory = () => {
    requestStory();
  };

  return (
    <>
    <div className="main">
    <div className="main-context">
      <h2>Generate a story about ...</h2>
      <input
        type="text"
        placeholder="Write your story title"
        id="story"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
        <button className="generate" onClick={generateStory}>Generate Story</button>
        {story && (
        <div className="story-container">
          <h3>Generated Story:</h3>
          <p>{story}</p>
        </div>
        )}
    </div>
   { loading && <div id='outer'><div id='middle'><div id='inner'>    </div></div></div>}
  </div>
    </>
  );
};

export default Home;
