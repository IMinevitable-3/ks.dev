import { handleAnchorAbout } from "../helpers/handleAnchorAbout";
import { introduction } from "../helpers/aboutContent";
const Intro = () => {
  return (
    <p>
      <a
        className="inline-flex select-none items-baseline font-bold outline-none duration-500 hover:text-[#ED4245]"
        href="#intro"
        id="intro"
        data-umami-event="Share 'Intro'"
        onClick={(event) => handleAnchorAbout(event, "intro")}
      >
        [#]
      </a>{" "}
      <span dangerouslySetInnerHTML={{ __html: introduction.join(" ") }}></span>
    </p>
  );
};

export default Intro;
