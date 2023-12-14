import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

interface Props {
  text: string;
}

export const Footer = ({ text }: Props) => {
  return (
    <footer className="bg-black p-10">
      <div className="flex justify-center gap-5">
        <a
          href="https://github.com/facundo3336"
          className="text-white text-4xl hover:text-violet cursor-pointer w-9 h-9 hover:scale-125 duration-100"
        >
          {" "}
          <FaGithub />
        </a>
        <a
          href="mailto:fcv3336@gmail.com"
          className="text-white text-4xl hover:text-violet cursor-pointer w-9 h-9 hover:scale-125 duration-100"
        >
          {" "}
          <IoMdMail />
        </a>
        <a
          href="https://www.linkedin.com/in/facundo-cabral-90ab9122a"
          className="text-white text-4xl hover:text-violet cursor-pointer w-9 h-9 hover:scale-125 duration-100"
        >
          {" "}
          <FaLinkedin />
        </a>
      </div>
      <span className="text-white text-sm block text-center pt-8">{text}</span>
    </footer>
  );
};
