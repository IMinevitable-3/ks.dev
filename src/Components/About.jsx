import { useEffect } from "react";
import { Helmet } from "react-helmet";

import { anchorGo } from "../helpers/anchorGo";
import { handleAnchorAbout } from "../helpers/handleAnchorAbout";
import Header from "./Header";
import Intro from "./Intro";
import Divider from "./Divider";
import BackgroundEducation from "./BackgroundEducation";
import { stack } from "../helpers/aboutContent";
import Footer from "./Footer";
import HobbiesAndInterests from "./HobbiesAndInterests";
import MyExperience from "./MyExperience";
import { SocialLinks } from "./SocialLinks";

const About = () => {
  const PAGE_TITLE = "Komal Sai - About me";
  const PAGE_DESCRIPTION =
    "This page contains all information about my background education, tech stack, hobbies, etc.";

  useEffect(() => {
    anchorGo();
  }, []);

  return (
    <>
      <Helmet>
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESCRIPTION} />
        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:description" content={PAGE_DESCRIPTION} />
      </Helmet>
      <div className="min-h-dvh bg-gradient-to-br from-[#121212] to-[#0C0E10] text-white">
        <Header />
        <div className="mx-auto flex max-w-4xl flex-col space-y-16 px-1 sm:px-5">
          <div className="space-y-5">
            <div className="flex flex-row items-center justify-between text-2xl">
              <h1 className="flex items-center space-x-2 text-2xl outline-none">
                <span className="text-[#ED4245]">About</span>
                <a
                  className="select-none outline-none duration-500 hover:text-[#ED4245]"
                  href="#about"
                  id="about"
                  data-umami-event="Share 'About'"
                  onClick={(event) => handleAnchorAbout(event, "about")}
                >
                  [#]
                </a>
              </h1>
              <a
                className="duration-500 hover:text-[#ED4245]"
                href="/api/pdf"
                data-umami-event="Download CV"
              >
                [CV]
              </a>
            </div>

            <div className="group relative block h-full select-none"></div>

            <Intro />

            <Divider text="Background Education" />
            <BackgroundEducation />
            <Divider text="Hobbies & Interests" />
            <HobbiesAndInterests />
          </div>
          <div className="space-y-2">
            <h1 className="flex items-center space-x-2 text-2xl">
              <div className="break-words">
                <span className="text-[#ED4245]">My Experience</span>
              </div>

              <a
                className="select-none outline-none duration-500 hover:text-[#ED4245]"
                href="#my-stack"
                id="my-stack"
                data-umami-event="Share 'My Experience'"
                onClick={(event) => handleAnchorAbout(event, "my-Experience")}
              >
                [#]
              </a>
            </h1>
            <MyExperience />
          </div>

          <div className="space-y-2">
            <h1 className="flex items-center space-x-2 text-2xl">
              <div className="break-words">
                <span className="text-[#ED4245]">My stack</span>
              </div>

              <a
                className="select-none outline-none duration-500 hover:text-[#ED4245]"
                href="#my-stack"
                id="my-stack"
                data-umami-event="Share 'My stack'"
                onClick={(event) => handleAnchorAbout(event, "my-stack")}
              >
                [#]
              </a>
            </h1>

            <p>
              When developing projects, I use different technologies and
              programming languages to ensure the product meets my expectations.
            </p>

            <div className="space-y-2">
              <h2 className="text-lg text-[#ED4245]">Languages</h2>
              <p className="text-[#5862F2]">{stack.languages.join(", ")}</p>
            </div>

            <div className="space-y-2">
              <h2 className="text-lg text-[#ED4245]">Technologies</h2>
              {Object.keys(stack.technologies).map((technology) => (
                <div key={technology}>
                  {technology}:{" "}
                  <span className="text-[#5862F2]">
                    {stack.technologies[technology].join(", ")}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <h1 className="flex items-center space-x-2 text-2xl">
              <div className="break-words">
                <span className="text-[#ED4245]">Socials</span>
              </div>

              <a
                className="select-none outline-none duration-500 hover:text-[#ED4245]"
                href="#socials"
                id="socials"
                data-umami-event="Share 'Socials'"
                onClick={(event) => handleAnchorAbout(event, "socials")}
              >
                [#]
              </a>
            </h1>

            <p>
              If you have any questions you can contact with me in{" "}
              <span>
                <SocialLinks />
              </span>
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default About;
