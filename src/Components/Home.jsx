import { OWNER } from "../helpers/constants";
import Footer from "./Footer";
import Header from "./Header";
const Home = () => {
  return (
    <div className="flex min-h-dvh flex-col justify-between bg-gradient-to-br from-[#121212] to-[#0C0E10] text-white">
      <Header />
      <div className="hero flex justify-center">
        <div className="hero-content px-1 text-center sm:px-5">
          <div className="font-bold text-[#5865F2] outline-none">
            <h1 className="text-5xl">{OWNER}</h1>
          </div>

          <p className="mt-5 text-2xl">
            I&apos;m a{" "}
            <span className="text-[#ED4245]">full stack web developer</span>
          </p>

          <div className="mt-5 text-2xl">
            <a className="duration-500 hover:text-[#ED4245]" href="/about">
              [About]
            </a>
            <a className="duration-500 hover:text-[#ED4245]" href="/projects">
              [Projects]
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
