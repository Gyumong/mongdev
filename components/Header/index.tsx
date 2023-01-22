import { FC } from "react";
import SunIcon from "../../public/images/sun.svg";
import MoonIcon from "../../public/images/moon.svg";
import Link from "next/link";
const Header: FC = () => {
  const themeModeHandle = () => {
    localStorage.theme = localStorage.theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full h-[100px] mobile:h-[60px] bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100">
      <nav className="flex h-[60px] page-padding w-full items-center justify-between">
        <Link href="/">
          <h1 className="title-22">Mong</h1>
        </Link>
        <div
          className="flex h-[40px] page-padding items-center"
          onClick={themeModeHandle}
        >
          <SunIcon className="block dark:hidden" />
          <MoonIcon className="hidden dark:block" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
