const Navbar = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-6 w-full overflow-hidden z-10">
      <div className="w-full bg-color-Atlantis h-[75px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white">
        <a href="/" className="hover:text-gray-200 h-[60px] w-[60px] flex justify-center items-center">
          <i className="bx bx-home"></i>
        </a>
        
        <a href="/about" className="hover:text-gray-200  h-[60px] w-[60px] flex justify-center items-center">
          <i className="bx bx-user"></i>
        </a>
        
        <a href="/skills" className="hover:text-gray-200 h-[60px] w-[60px] flex justify-center items-center">
          <i className="bx bx-code-alt"></i>
        </a>

        <a href="/portfolio" className="hover:text-gray-200 h-[60px] w-[60px] flex justify-center items-center">
          <i className="bx bx-briefcase"></i>
        </a>

        <a href="/contact" className="hover:text-gray-200 h-[60px] w-[60px] flex justify-center items-center">
          <i className="bx bx-envelope"></i>
        </a>

        <a href="/blog" className="hover:text-gray-200 h-[60px] w-[60px] flex justify-center items-center">
          <i className="bx bx-chat"></i>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;