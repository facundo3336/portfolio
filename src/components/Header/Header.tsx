import React from "react";
import { Container } from "../Container/Container";

export const Header = () => {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const navItems = ["About", "Project", "Skills", "Contact"];

  const navClass = isNavOpen ? "translate-x-0" : "-translate-x-full";

  const clickNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="pt-7 text-lg bg-gradient-to-t from-transparent to-black relative">
      <Container>
        <div className="align-center flex justify-between">
          <img
            src="./portfolio.png"
            alt=""
            className="w-16 h-16 rounded-full"
          />
          <nav className="hidden  md:flex flex-col justify-center">
            <ul className="text-red-500  flex gap-10  align-middle">
              {navItems.map((i) => {
                return (
                  <li key={i} className="text-white">
                    {i}
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </Container>
      {isNavOpen && (
        <div className="md:hidden fixed bg-transparent-black top-0 bottom-0 left-0 right-0 w-screen h-screen flex justify-start"></div>
      )}
      <nav
        className={`md:hidden fixed top-0 bottom-0 h-screen bg-black w-80 -left-10 ${navClass} transition-transform duration-100 p-10 z-20`}
      >
        <ul className="text-red-500  flex flex-col gap-10 justify-end p-10">
          {navItems.map((i) => {
            return (
              <li key={i} className="text-white">
                {i}
              </li>
            );
          })}
        </ul>
      </nav>
      <button
        onClick={clickNav}
        className="bg-violet w-14 h-14 rounded-full md:hidden z-30 p-1 flex flex-col gap-2 justify-center align-middle fixed top-8 right-9"
      >
        <div className="bg-white w-8 mx-auto h-1"></div>
        <div className="bg-white w-8 mx-auto h-1"></div>
        <div className="bg-white w-8 mx-auto h-1"></div>
      </button>
    </header>
  );
};
