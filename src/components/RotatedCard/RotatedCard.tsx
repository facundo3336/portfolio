interface Props {
  imageUrl: string;
  title: string;
  description: string;
}

export const RotatedCard = ({ imageUrl, title, description }: Props) => {
  return (
    <div
      className={`bg-violet rounded-xl w-72 h-72 p-5 text-center animate-swing`}
    >
      <img className="h-8 mx-auto mb-2 rounded-md" src={imageUrl} alt="Logo" />
      <h5 className="text-lg font-extrabold pb-5">{title}</h5>
      <p className="text-sm">{description}</p>
    </div>
  );
};
