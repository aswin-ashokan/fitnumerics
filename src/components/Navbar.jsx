import { NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { VscChromeClose } from "react-icons/vsc";
import { useState } from "react";
const navLinks = [
  { name: "Home", link: "" },
  { name: "FitCalc", link: "/fitcalc" },
  { name: "FitDrill", link: "/fitdrill" },
  { name: "FitInfo", link: "fitinfos" },
];
const Navbar = () => {
  const [navToggle, setNavToggle] = useState(true);
  const [toggleHidden, setToggleHidden] = useState(true);

  const handleToggleClick = () => {
    setNavToggle(!navToggle);
    setToggleHidden(!toggleHidden);
  };
  const handleMenuClick = () => {
    setToggleHidden(!toggleHidden);
    setNavToggle(!navToggle);
  };
  return (
    <>
      <header className="py-2 lg:px-0 px-4 w-full grid lg:grid-cols-12 shadow-xl shadow-slate-200">
        <div className="logo lg:col-span-1 lg:col-start-2 lg:col-end-2">
          <img
            src="/site-logo.png"
            alt="site logo"
            width={200}
            className=""
            loading="eager"
          />
        </div>
        <div className="toggleBtn lg:hidden absolute right-8 top-4">
          <button className="" onClick={handleToggleClick}>
            {navToggle ? (
              <FiMenu className="border-2 p-1 rounded-lg text-4xl text-[#f00b51] hover:text-[#ff6cab] active:text-orange-600" />
            ) : (
              <VscChromeClose className="text-3xl text-[#f00b51] hover:text-[#ff6cab] active:text-orange-600" />
            )}
          </button>
        </div>
        <nav
          className={`navLink lg:col-span-8 lg:col-start-10 lg:col-end-11 lg:place-self-center lg:px-8 text-tlight lg:flex
        ${toggleHidden ? "hidden" : "flex"}`}
        >
          <ul className="lg:flex items-center lg:gap-16 lg:py-0 py-5">
            {navLinks.map((link) => (
              <NavLink
                to={link.link}
                key={link.name}
                className="text-lg block lg:pt-0 pt-4 text-[#f00b51] hover:text-[#ff6cab]"
                onClick={()=>(
                  handleMenuClick(),
                  window.scrollTo(0,0)
                )}
              >
                {link.name}
              </NavLink>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
