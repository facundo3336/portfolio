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
          className={`h-full w-full shrink-0  ${animationClasses}`}
        >
          <RotatedCard
            title="GitHub"
            imageUrl="./github.png"
            description="I am skilled in using GitHub for seamless project collaboration, code sharing, and issue tracking. Through GitHub, I efficiently create and manage repositories and effectively present my work to potential employers."
          />
        </div>
        <div
          id="animatedItem"
          className={`h-full w-full shrink-0 ${animationClasses}`}
        >
          <RotatedCard
            title="GitHub"
            imageUrl="./github.png"
            description="I am skilled in using GitHub for seamless project collaboration, code sharing, and issue tracking. Through GitHub, I efficiently create and manage repositories and effectively present my work to potential employers."
          />
        </div>
      </div>
      <div className="h-px bg-violet absolute top-12 w-full z-10"></div>
    </div>
  );
};
