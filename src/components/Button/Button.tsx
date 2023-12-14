import { useState } from "react";

interface Props {
  onClick: () => void;
  children?: React.ReactNode;
  type: "link" | "button" | "language";
  path?: string;
  color?: "violet" | "strongerViolet";
}

export const Button = ({ onClick, children, type, path, color }: Props) => {
  const [flagClass, setFlagClass] = useState("bg-ukFlag");

  const onClickLanguageButton = () => {
    onClick();
    if (flagClass === "bg-ukFlag") {
      setFlagClass("bg-spainFlag");
    } else {
      setFlagClass("bg-ukFlag");
    }
  };

  if (type === "button") {
    return (
      <button
        className={`rounded-md shadow-md inline-block text-white bg-${color} pt-2 pb-2 pl-5 pr-5 hover:bg-strongViolet`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }

  if (type === "language") {
    return (
      <button
        className="overflow-hidden rounded-sm border-[1px] hover:border-violet"
        onClick={onClickLanguageButton}
      >
        <div className={`${flagClass} w-9 h-6 bg-white bg-contain `}>
          <div className="w-full h-full transparent hover:bg-transparent-black"></div>
        </div>
      </button>
    );
  }

  return (
    <a
      className="relative rounded-md flex items-center justify-center h-[50px] w-40 overflow-hidden border border-violet bg-white text-black shadow-2xl transition-all before:absolute before:left-0 before:right-0 before:top-0 before:h-0 before:w-full before:bg-violet before:duration-500 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 after:w-full after:bg-violet after:duration-500 hover:text-white  hover:before:h-2/4 hover:after:h-2/4"
      href={path}
    >
      <span className="absolute z-10">{children}</span>
    </a>
  );
};
