import LogoImage from '../assets/icons/logo.svg';
import MenuIcon from '../assets/icons/menu.svg';

export const Navbar = () => {
  return (
    <div className="bg-black">
      <div className="px-4">
        <div className="container bg-black">
          <div className="py-4 flex items-center justify-between">
            <div className="relative">
              <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#3D6CD9,#2650A5,#5A8BFF)] blur-md"></div>
              <LogoImage className="h-12 w-12 relative mt-1" />
            </div>

            <div className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden">
              <MenuIcon className="text-white" />
            </div>

            <nav className="text-white gap-6 items-center hidden sm:flex">
              <a
                href="#apps"
                className="text-opacity-60 text-white hover:text-opacity-100 transition"
              >
                Apps
              </a>
              <a
                href="#roadmap"
                className="text-opacity-60 text-white hover:text-opacity-100 transition"
              >
                Roadmap
              </a>
              <a
                href="#changelog"
                className="text-opacity-60 text-white hover:text-opacity-100 transition"
              >
                Changelog
              </a>
              <a
                href="#vision"
                className="text-opacity-60 text-white hover:text-opacity-100 transition"
              >
                Vision
              </a>
              <a
                href="#about"
                className="text-opacity-60 text-white hover:text-opacity-100 transition"
              >
                About
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};