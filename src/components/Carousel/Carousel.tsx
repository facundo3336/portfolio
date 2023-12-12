import { RotatedCard } from "../RotatedCard/RotatedCard";

interface Props {
  scrollFrom: "Left" | "Right";
}

export const Carousel = ({ scrollFrom }: Props) => {
  let animationClasses: string = "animate-scrollLeft translate-x-0";

  if (scrollFrom === "Right") {
    animationClasses = "animate-scrollRight -translate-x-full";
  }

  return (
    <div id="animatedFather" className="relative">
      <div className="z-5 flex overflow-hidden h-full w-full py-10 sm:border-l-2 sm:border-r-2 border-violet">
        <div
          id="animatedItem"
          className={`h-full shrink-0 flex px-8 gap-16  ${animationClasses}`}
        >
          <RotatedCard title="GitHub" imageUrl="./github.png" />
          <RotatedCard title="HTML5" imageUrl="./html.png" />
          <RotatedCard title="CSS3" imageUrl="./css.png" />
          <RotatedCard title="React" imageUrl="./react.webp" />
          <RotatedCard title="SASS" imageUrl="./sass.png" />
          <RotatedCard title="JavaScript" imageUrl="./js.png" />
          <RotatedCard title="QA" imageUrl="./qa.png" />
          <RotatedCard title="Jira" imageUrl="./jira.png" />
          <RotatedCard title="Trello" imageUrl="./trello.png" />
          <RotatedCard title="Postman" imageUrl="./postman.png" />
        </div>

        <div
          id="animatedItem"
          className={`h-full  shrink-0 flex px-8 gap-16 ${animationClasses}`}
        >
          <RotatedCard title="GitHub" imageUrl="./github.png" />
          <RotatedCard title="HTML5" imageUrl="./html.png" />
          <RotatedCard title="CSS3" imageUrl="./css.png" />
          <RotatedCard title="React" imageUrl="./react.webp" />
          <RotatedCard title="SASS" imageUrl="./sass.png" />
          <RotatedCard title="JavaScript" imageUrl="./js.png" />
          <RotatedCard title="QA" imageUrl="./qa.png" />
          <RotatedCard title="Jira" imageUrl="./jira.png" />
          <RotatedCard title="Trello" imageUrl="./trello.png" />
          <RotatedCard title="Postman" imageUrl="./postman.png" />
        </div>
      </div>
      <div className="h-px bg-violet absolute top-12 w-full z-10"></div>
    </div>
  );
};
