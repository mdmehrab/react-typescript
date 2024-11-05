import Footer from "./components/Footer";
import Toolbar from "./components/Toolbar";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <div className="bg-white">
      <Toolbar />
      </div>
      <Home /> 
      <Footer />
    </>
  );
}

export default App;
