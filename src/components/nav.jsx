import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  return (
    <nav className="fixed bottom-2 lg:bottom-4 w-full overflow-hidden z-10">
      <div className="w-full bg-color-Atlantis h-[70px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white">
        <Link
          to="/"
          className={`h-[60px] w-[60px] flex justify-center items-center ${
            isActive("/") ? "bg-white rounded-full" : "hover:text-gray-200"
          }`}
        >
          <i
            className={`bx bx-home ${isActive("/") ? "text-color-Atlantis" : ""}`}
          ></i>
        </Link>

        <Link
          to="/about"
          className={`h-[60px] w-[60px] flex justify-center items-center ${
            isActive("/about") ? "bg-white rounded-full" : "hover:text-gray-200"
          }`}
        >
          <i
            className={`bx bxs-user ${isActive("/about") ? "text-color-Atlantis" : ""}`}
          ></i>
        </Link>

        <Link
          to="/skills"
          className={`h-[60px] w-[60px] flex justify-center items-center ${
            isActive("/skills")
              ? "bg-white rounded-full"
              : "hover:text-gray-200"
          }`}
        >
          <i
            className={`bx bx-code-alt ${isActive("/skills") ? "text-color-Atlantis" : ""}`}
          ></i>
        </Link>

        <Link
          to="/portfolio"
          className={`h-[60px] w-[60px] flex justify-center items-center ${
            isActive("/portfolio")
              ? "bg-white rounded-full"
              : "hover:text-gray-200"
          }`}
        >
          <i
            className={`bx bxs-briefcase ${isActive("/portfolio") ? "text-color-Atlantis" : ""}`}
          ></i>
        </Link>

        <Link
          to="/contact"
          className={`h-[60px] w-[60px] flex justify-center items-center ${
            isActive("/contact")
              ? "bg-white rounded-full"
              : "hover:text-gray-200"
          }`}
        >
          <i
            className={`bx bxs-envelope ${isActive("/contact") ? "text-color-Atlantis" : ""}`}
          ></i>
        </Link>

        <Link
          to="/my-writings"
          className={`h-[60px] w-[60px] flex justify-center items-center ${
            isActive("/my-writings")
              ? "bg-white rounded-full"
              : "hover:text-gray-200"
          }`}
        >
          <i
            className={`bx bxs-chat ${isActive("/my-writings") ? "text-color-Atlantis" : ""}`}
          ></i>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
