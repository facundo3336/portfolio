import { useRef } from "react";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

interface Props {
  titleText: string;
  textBeforeTitle: string;
}

export const Title = ({ titleText, textBeforeTitle }: Props) => {
  const titleRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver({ ref: titleRef });

  console.log(isVisible);

  return (
    <div
      ref={titleRef}
      className={`uppercase text-strongViolet font-semibold ${
        isVisible && "animate-fadeInLeft"
      }`}
    >
      <span className="sm:text-xl ">{textBeforeTitle}</span>
      <h1 className="text-violet text-4xl sm:text-5xl lg:text-7xl m-0 -ml-1">
        {titleText}
      </h1>
    </div>
  );
};
