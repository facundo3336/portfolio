interface Props {
  children: React.ReactNode;
}

export const Container = ({ children }: Props) => {
  return <div className="container mx-auto">{children}</div>;
};
