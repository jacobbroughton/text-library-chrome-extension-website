import "./App.css";
import ScreenshotImage from "./assets/screenshot.jpg";

function App() {
  return (
    <div>
      <h1>Note Library</h1>
      <p>Keep a note nearby</p>
      <div>
        <img src={ScreenshotImage} />
      </div>
    </div>
  );
}

export default App;
