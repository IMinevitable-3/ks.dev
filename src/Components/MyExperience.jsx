import { Experience } from "../helpers/aboutContent";
import sendAnalyticsSignal from "../helpers/allowedAnalytics";

const formatDate = (date) => {
  if (!date) return "present";
  const options = { year: "numeric", month: "short" };
  return new Intl.DateTimeFormat("en-US", options).format(date);
};

const MyExperience = () => {
  return (
    <div className="space-y-4">
      {Experience.map((exp, index) => (
        <div key={index} className="space-y-2">
          <div className="flex justify-between items-center">
            <a
              href={exp.product}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-lg duration-500 hover:text-[#ED4245]"
              onClick={(event) => {
                event.preventDefault();
                sendAnalyticsSignal(exp.company);
                window.open(exp.product, "_blank");
              }}
            >
              {exp.company}
            </a>
            <span className="">
              {`${formatDate(exp.joinDate)} - ${formatDate(exp.leftDate)}`}
            </span>
          </div>
          <div className="text-[#5862F2] italic">{exp.role}</div>
        </div>
      ))}
    </div>
  );
};

export default MyExperience;
