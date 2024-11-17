import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "../assets/loading.json"; 


const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Player
        autoplay
        loop
        src={animationData}
        style={{ height: "200px", width: "200px" }}
      />
    </div>
  );
};

export default Loader;
