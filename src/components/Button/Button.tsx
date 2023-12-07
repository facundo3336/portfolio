interface Props {
  onClick: () => void;
  children: React.ReactNode;
  type: "link" | "button";
  path?: string;
  color: "violet" | "strongerViolet";
}

export const Button = ({ onClick, children, type, path, color }: Props) => {
  if (type === "button") {
    return (
      <button
        className={`rounded-md shadow-md inline-block text-white bg-${color} pt-2 pb-2 pl-5 pr-5 hover:bg-strongViolet`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }

  return (
    <a
      className="rounded-md shadow-md inline-block text-white bg-strongerViolet pt-2 pb-2 pl-5 pr-5 hover:bg-strongViolet"
      href={path}
    >
      {children}
    </a>
  );
};
