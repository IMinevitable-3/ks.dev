import { Mail } from "lucide-react";
import sendAnalyticsSignal from "../helpers/allowedAnalytics";
const socials = {
  mail: {
    icon: <Mail />,
    url: "mailto:komalsai130@gmail.com",
  },
};

export const SocialLinks = () => {
  return (
    <>
      {Object.keys(socials).map((social) => (
        <a
          key={social}
          href={socials[social].url}
          target="_blank"
          rel="noopener noreferrer"
          className="box-decorator bg-[#ED4245] capitalize space-x-2"
          onClick={(event) => {
            event.preventDefault();
            sendAnalyticsSignal("mail");
            window.open(socials[social].url, "_blank");
          }}
          data-umami-event="mail"

        >
          {socials[social].icon}
          <span>{social}</span>
        </a>
      ))}
    </>
  );
};
