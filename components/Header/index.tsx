import clsx from "clsx";
import { FC, PropsWithChildren } from "react";

const Header: FC = () => {
  return (
    <header
      className={clsx(
        "fixed",
        "top-0",
        "left-0",
        "z-50",
        "w-full",
        "h-[100px]",
        "mobile:h-[60px]",
        "bg-white"
      )}
    >
      <nav className="flex h-[60px] page-padding w-full items-center">
        <div className="title-22">Mong</div>
      </nav>
    </header>
  );
};

export default Header;
