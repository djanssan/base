// /Users/peter/Downloads/base (next-tailwind-amazona)/pages/_app.js
import "../styles/globals.css";

// this file doesn't change much unless you are adding some global dependencies like
// Google maps you want to be active throughout your component

// Ask gpt: "Why would I put google integration in my _app.js as a pose to individual page?n"

function MyApp({ Component, pageProps: { ...pageProps } }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
