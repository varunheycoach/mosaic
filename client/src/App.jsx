import "./app.css";
import LeftBar from "./components/LeftBar/leftBar";
import TopBar from "./components/TopBar/topBar";
import Gallery from "./components/Gallery/gallery";

const App = () => {
  return (
    <div className="app">
      <LeftBar />
      <div className="content">
        <TopBar />
        <Gallery />
      </div>
    </div>
  );
};

export default App;
