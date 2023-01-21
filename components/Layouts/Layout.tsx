import localFont from "@next/font/local";
import { FC, PropsWithChildren } from "react";
import Header from "../Header";

const SfProDisplayFont = localFont({
  src: [
    {
      path: "../../public/fonts/SF-Pro-Display-Black.woff2",
      weight: "900",
    },
    {
      path: "../../public/fonts/SF-Pro-Display-Bold.woff2",
      weight: "700",
    },
    {
      path: "../../public/fonts/SF-Pro-Display-Medium.woff2",
      weight: "500",
    },
  ],
  variable: "--font-sfpro-display",
});

const SfProTextFont = localFont({
  src: [
    {
      path: "../../public/fonts/SF-Pro-Text-Bold.woff2",
      weight: "700",
    },
    {
      path: "../../public/fonts/SF-Pro-Text-Medium.woff2",
      weight: "500",
    },
    {
      path: "../../public/fonts/SF-Pro-Text-Light.woff2",
      weight: "200",
    },
  ],
  variable: "--font-sfpro-text",
});

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html
      className={`${SfProDisplayFont.variable} ${SfProTextFont.variable} h-fullScreen m-mobile-env p-mobile-env flex flex-col`}
    >
      <Header />
      {children}
    </html>
  );
};

export default Layout;
