interface Props {
  titleText: string;
  textBeforeTitle: string;
}

export const Title = ({ titleText, textBeforeTitle }: Props) => {
  return (
    <div className="uppercase text-strongViolet font-semibold">
      <span className="sm:text-xl ">{textBeforeTitle}</span>
      <h1 className="text-violet text-4xl sm:text-7xl m-0 -ml-1">
        {titleText}
      </h1>
    </div>
  );
};
