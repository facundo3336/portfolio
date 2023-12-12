import { Button } from "../Button/Button";

interface Props {
  imageUrl: string;
  title: string;
  children: React.ReactNode;
  buttonText: string;
  buttonLink: string;
}

export const ProjectCard = ({
  imageUrl,
  title,
  children,
  buttonLink,
  buttonText,
}: Props) => {
  return (
    <div className="text-white flex flex-col gap-7 max-w-sm md:max-w-xs animate-fadeIn">
      <img src={imageUrl} alt="image" className=" w-48 h-48 rounded-md" />
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="text-sm">{children}</p>
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
