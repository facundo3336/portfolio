interface Props {
  imageUrl: string;
  title: string;
}

export const RotatedCard = ({ imageUrl, title }: Props) => {
  return (
    <div
      className={`bg-violet rounded-xl w-32 h-32 p-5 pt-7 text-center animate-swing hover:cursor-default`}
    >
      <img className="h-8 mx-auto mb-2 rounded-md" src={imageUrl} alt="Logo" />
      <h5 className="text-lg font-extrabold pb-5">{title}</h5>
    </div>
  );
};
