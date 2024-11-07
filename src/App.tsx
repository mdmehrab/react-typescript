import Footer from "./components/Footer";
import Toolbar from "./components/Toolbar";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <div className="w-full">
      <Toolbar />
      </div>
      <Home /> 
      <Footer />
    </>
  );
}

export default App;
