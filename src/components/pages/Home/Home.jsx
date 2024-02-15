import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="heading">
        <h1>Note Library</h1>
        <p>Keep a note nearby!</p>
      </div>
      <div className="image-container">
        <img src="./screenshot.jpg" alt="screenshot of chrome extension" />
      </div>

      <div className="links">
        <a>Download from the Chrome Store</a>
        <Link>Privacy Policy</Link>
      </div>
    </div>
  );
};
export default Home;
