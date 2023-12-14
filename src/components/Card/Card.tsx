import { Button } from "../Button/Button";

interface Props {
  title: string;
  linkText: string;
  link: string;
  description: string;
  isCardVisible: boolean;
}

export const Card = ({
  title,
  link,
  linkText,
  description,
  isCardVisible,
}: Props) => {
  return (
    <div
      className={`rounded-lg overflow-hidden shadow-2xl max-w-sm md:mx-auto ${
        isCardVisible && "animate-fadeIn"
      }`}
    >
      <h2 className="bg-violet text-white text-lg md:text-2xl lg:text-4xl font-semibold p-4 text-center">
        {title}
      </h2>
      <span className="block pt-10 px-3 text-white text-center h-32">
        {description}
      </span>
      <div className="flex justify-center pb-10">
        <Button color="violet" type="link" path={link} onClick={() => {}}>
          {linkText}
        </Button>
      </div>
    </div>
  );
};
