const Navbar = () => {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#" className="ml-3 text-xl">
            Sagit-!
          </a>
        </a>
        <nav className="flex flex-wrap items-center text-base justify-center md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700">
          <a
            href="#projects"
            className="text-lg mr-5 hover:text-white font-medium"
          >
            About Me
          </a>
          <a
            href="#skills"
            className="text-lg mr-5 hover:text-white font-medium"
          >
            Experience
          </a>
        </nav>
        <a
          href="#contact"
          className="text-lg mr-5 hover:text-white font-medium"
        >
          Contact Me
        </a>
      </div>
    </header>
  );
};

export default Navbar;
