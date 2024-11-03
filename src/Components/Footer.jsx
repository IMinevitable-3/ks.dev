import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { location } from "../helpers/constants";
import sendAnalyticsSignal from "../helpers/allowedAnalytics";
const fetchVisitorCount = async () => {
  const response = await axios.post(
    `${import.meta.env.VITE_APP_API_URL}/count-events`,
    {
      event: "home",
    }
  );
  return response.data.count;
};

const Footer = () => {
  const {
    data: visitorCount,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["visitorCount"],
    queryFn: fetchVisitorCount,
  });

  return (
    <footer className="select-none pb-2 pt-5 text-lg">
      <div className="grid w-full grid-cols-1 items-center gap-2 px-1 sm:px-5 md:grid-cols-3">
        <div className="flex items-center space-x-2 text-left">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M18.816 13.58c2.292 2.138 3.546 4 3.092 4.9c-.745 1.46 -5.783 -.259 -11.255 -3.838c-5.47 -3.579 -9.304 -7.664 -8.56 -9.123c.464 -.91 2.926 -.444 5.803 .805" />
              <path d="M12 12m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
            </svg>
          </div>
          <a
            className="duration-500 hover:text-[#ED4245]"
            href={location.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sendAnalyticsSignal("location")}
          >
            {location.name}
          </a>
        </div>

        <div className="flex items-center justify-start space-x-2 md:justify-center">
          {isLoading && <span>Loading...</span>}
          {isError && <span>Error fetching data</span>}
          {!isLoading && !isError && (
            <a
              className="duration-500 hover:text-[#ED4245]"
              href="/analytics"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sendAnalyticsSignal("analytics")}
            >
              {visitorCount} views
            </a>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
