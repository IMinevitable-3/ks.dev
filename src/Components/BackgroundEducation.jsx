import { Education } from "../helpers/aboutContent";
import { GraduationCap, Backpack, SquareArrowOutUpRight } from "lucide-react";

const BackgroundEducation = () => {
  return (
    <div>
      {Education.map((val, index) => (
        <div key={index} className="flex items-center mb-4">
          <div className="mr-8">
            {val.icon === GraduationCap ? (
              <GraduationCap className="w-5 h-5" />
            ) : (
              <Backpack className="w-5 h-5" />
            )}
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-center">
              <span className="font-bold flex items-center">
                {val.Name}
                <span>
                  <SquareArrowOutUpRight
                    className={`w-4 h-4 ml-2 opacity-0 hover:opacity-100 transition-opacity duration-300`}
                  />
                </span>
              </span>
              <span>{val.passOut}</span>
            </div>
            <div className="flex justify-between">
              <span>{val.course}</span>
              <span>{val.gpa}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BackgroundEducation;
