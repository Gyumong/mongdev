import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const setThemeMode = `
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
`;
  return (
    <Html lang="en">
      <Head>
        <script dangerouslySetInnerHTML={{ __html: setThemeMode }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
