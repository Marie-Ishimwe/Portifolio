import Navbar from "./nav";
import omg from '../assets/omg.png';
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Banner = () => {
  const [text] = useTypewriter({
    words: [
      // "a Flutter Developer",
      "a Developer",
      "a UX/UI Designer",
      "a Game Designer",
      // "a Frontend Developer",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <div
      className="hero min-h-screen relative flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${omg})`,
      }}
    >
      <Navbar />
      <div className="absolute inset-0 bg-black bg-opacity-65"></div>
      <div className="relative text-center text-color-Gallery p-10">
        <div className=" max-w-screen-sm justify-center">
          <p className="text-xl mb-2 uppercase">Hi there!</p>
          <h1 className="mb-5 text-6xl font-bold whitespace-nowrap uppercase">
            i'm{" "}
            <span className="min-w-full text-color-Atlantis font-bold transition-opacity duration-500">
              {text}
            </span>
            <Cursor cursorBlinking="true" cursorColor="#72B626" />
          </h1>
          <div className="mb-5 max-w-screen-sm justify-center">
            <p className="text-base">
              {" "}
              I'm an aspiring game designer, but also UI/UX Designer and
              Developer based in Rwanda, Kigali. I strive to build immersive and
              beautiful web applications through carefully crafted code and
              user-centric design.
            </p>
          </div>
          <div className="flex space-x-4 justify-center">
            <button className="bg-color-Atlantis text-white px-4 sm:px-6 py-3 rounded-full flex items-center text-base transition duration-300 ease-in-out transform hover:bg-color-Emperor hover:scale-105 hover:shadow-lg">
              <i className="bx bxs-user text-md mr-2"></i>
              <span>MORE ABOUT ME</span>
            </button>
            <button className="bg-transparent border-2 border-color-Atlantis text-color-Atlantis px-6 py-3 rounded-full transition duration-300 ease-in-out transform hover:bg-color-lighter_Atlantis hover:border-none hover:scale-105 hover:shadow-lg">
              <i className="bx bxs-briefcase text-md mr-2"></i>
              <span>PORTFOLIO</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Banner };