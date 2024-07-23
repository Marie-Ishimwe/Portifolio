// import Navbar from "./nav";
import { Link } from "react-router-dom";
import omg from "../assets/omg.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Banner = () => {
  const [text] = useTypewriter({
    words: ["a Developer", "a UX/UI Designer", "a Game Designer"],
    loop: true,
    typeSpeed: 60,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });

  return (
    <div
      className="hero min-h-screen relative flex items-center justify-center bg-cover bg-center font-bodyFont"
      id="banner"
      style={{
        backgroundImage: `url(${omg})`,
      }}
    >
      {/* <Navbar /> */}
      <div className="absolute inset-0 bg-black bg-opacity-65"></div>
      <div className="relative text-center text-color-Gallery p-10">
        <div className="max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg mx-auto">
          <p className="text-sm md:text-xl mb-2 uppercase">Hi there!</p>
          <h1 className="mb-5 text-2xl md:text-6xl font-bold whitespace-nowrap uppercase">
            i'm{" "}
            <span className="min-w-full text-color-Atlantis font-bold transition-opacity duration-500">
              {text}
            </span>
            <Cursor cursorBlinking="true" cursorColor="#72B626" />
          </h1>
          <div className="mb-5 max-w-screen-sm md:max-w-screen-md mx-auto">
            <p className="text-base">
              I'm an aspiring game designer, but also UI/UX Designer and
              Developer based in Rwanda, Kigali. I strive to build immersive and
              beautiful web applications through carefully crafted code and
              user-centric design.
            </p>
          </div>
          <div className="flex flex-col gap-4 md:flex-row justify-center">
            <Link to="/about" className="inline-block">
              <button className="bg-color-Atlantis text-white px-6 py-3 rounded-full transition duration-300 ease-in-out transform hover:bg-color-Emperor hover:scale-105 hover:shadow-lg">
                <i className="bx bxs-user text-md md:text-lg lg:text-xl mr-2"></i>
                <span>MORE ABOUT ME</span>
              </button>
            </Link>

            <button className="bg-transparent border-2 border-color-Atlantis text-color-Atlantis px-6 py-3 rounded-full transition duration-300 ease-in-out transform hover:bg-color-lighter_Atlantis hover:border-none hover:scale-105 hover:shadow-lg">
              <i className="bx bxs-briefcase text-md md:text-lg lg:text-xl mr-2"></i>
              <span>PORTFOLIO</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Banner };
