import { Button } from "../Button/Button";

interface Props {
  imageUrl: string;
  title: string;
  children: React.ReactNode;
  buttonText: string;
  buttonLink: string;
  isTheCardVisible: boolean;
}

export const ProjectCard = ({
  imageUrl,
  title,
  children,
  buttonLink,
  buttonText,
  isTheCardVisible,
}: Props) => {
  return (
    <div
      className={`text-white flex flex-col gap-7 max-w-sm md:max-w-xs ${
        isTheCardVisible && "animate-fadeIn"
      }`}
    >
      <img src={imageUrl} alt="image" className=" w-48 h-48 rounded-full" />
      <h3 className="text-2xl font-semibold cursor-default">{title}</h3>
      <p className="text-sm cursor-default">{children}</p>
      <div className="flex justify-left">
        <Button
          color="strongerViolet"
          type="link"
          path={buttonLink}
          onClick={() => {}}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};
