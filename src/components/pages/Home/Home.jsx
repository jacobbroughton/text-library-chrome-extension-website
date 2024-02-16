import { Link } from "react-router-dom";
import "./Home.css";
import Navbar from "../../ui/Navbar/Navbar";

const Home = () => {
  return (
    <main>
      <Navbar/>
      <div className="home">
        <div className="heading">
          <h1>Note Library</h1>
          <p>Keep a note nearby!</p>
        </div>
        <div className="image-container">
          <img src="/public/screenshot.jpg" alt="screenshot of chrome extension" />
        </div>

        <div className="links">
          <a href="https://www.google.com">Download from the Chrome Store</a>
          <Link to='/privacy'>Privacy Policy</Link>
        </div>
      </div>
    </main>
  );
};
export default Home;
