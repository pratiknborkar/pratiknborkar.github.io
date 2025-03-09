import { useEffect } from "react";
import { ThemeProvider } from "next-themes";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/globals.css";
import "../styles/custom.css";
import { ToastContainer } from "react-toastify";
import ReactGA from "react-ga4";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({ duration: 1200 });
    AOS.refresh();
  }, []);

  useEffect(() => {
    // Initialize multiple products (trackers)
    ReactGA.initialize([
      {
        trackingId: "G-X5KDG8YB1M",
      },
      {
        trackingId: "G-X5KDG8YB1M",
      },
    ]);

    // Send pageview with a custom path
    ReactGA.send({
      hitType: "pageview",
      page: "/my-path",
      title: "Custom Title",
    });
  }, []);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
