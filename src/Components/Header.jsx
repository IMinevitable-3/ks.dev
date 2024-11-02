import { useState, useEffect, useRef } from "react";
import { headerDropdownLinks } from "../helpers/constants";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const isRootPage = location.pathname === "/";
  const [isDropdownActive, setIsDropdownActive] = useState(false);
  const dropdownElement = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownElement.current &&
        !dropdownElement.current.contains(event.target)
      ) {
        setIsDropdownActive(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <header
      className={`mb-5 flex select-none items-center px-1 py-2 text-lg sm:px-5 ${
        isRootPage ? "justify-end" : "justify-between"
      }`}
    >
      {!isRootPage && (
        <a className="duration-500 hover:text-[#ED4245]" href="/">
          [Home]
        </a>
      )}

      <div className="inline-flex items-stretch" ref={dropdownElement}>
        <div className="relative">
          <button
            onClick={() => setIsDropdownActive(!isDropdownActive)}
            className="select-none outline-none duration-500 hover:text-[#ED4245]"
          >
            [Menu]
          </button>

          {isDropdownActive && (
            <div className="absolute right-0 z-10 flex w-48 origin-top-right flex-col space-y-0.5 rounded-md bg-[#1D2123] p-2 pl-3 shadow-2xl">
              {headerDropdownLinks.map((link, index) => (
                <a
                  key={index}
                  className="duration-500 hover:text-[#ED4245]"
                  href={link.url}
                  target={link.external ? "_blank" : undefined}
                  onClick={() => setIsDropdownActive(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
