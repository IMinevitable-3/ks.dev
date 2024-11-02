import { Gamepad2, SquareFunction, Headphones, Footprints } from "lucide-react";

const hobbies = [
  { icon: <Gamepad2 className="w-5 h-5" />, name: "Gaming" },
  { icon: <Headphones className="w-5 h-5" />, name: "Music" },
  { icon: <SquareFunction className="w-5 h-5" />, name: "Programming" },
  { icon: <Footprints className="w-5 h-5" />, name: "Fitness" },
];

const HobbiesAndInterests = () => {
  return (
    <div className="space-y-4">
      {hobbies
        .reduce((rows, hobby, index) => {
          if (index % 2 === 0) {
            rows.push([hobby]);
          } else {
            rows[rows.length - 1].push(hobby);
          }
          return rows;
        }, [])
        .map((row, rowIndex) => (
          <div key={rowIndex} className="flex justify-between space-x-8">
            {row.map((hobby, index) => (
              <div key={index} className="flex items-center space-x-2">
                {hobby.icon}
                <span>{hobby.name}</span>
              </div>
            ))}
          </div>
        ))}
    </div>
  );
};

export default HobbiesAndInterests;
