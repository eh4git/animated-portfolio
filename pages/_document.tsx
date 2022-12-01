import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
          title="Erik Hirsch | Web Portfolio"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Roboto+Slab:wght@300;500;700&family=Roboto:wght@300;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body
        className="bg-no-repeat bg-cover bg-gradient-to-b from-day-100 via-day-100 to-day-500 dark:from-night-500 dark:via-night-300 dark:to-night-200 dark:text-white text-night-700"
        // style={{ height: "100vh" }}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
