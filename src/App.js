import NavBar from "./components/NavBar";
import Card from "./components/Card";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <div className="container text-center mt-5">
        <h1>Gallery</h1>
        <div className="row">
          {Array.apply(null, { length: 9 }).map(() => <Card />)}     
        </div>
      </div>
    </>
  );
}

export default App;
