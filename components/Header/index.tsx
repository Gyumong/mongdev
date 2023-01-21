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
        "h-24",
        "page-padding"
      )}
    >
      <div className="title-22">Mong</div>
    </header>
  );
};

export default Header;
