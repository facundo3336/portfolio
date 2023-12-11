interface Props {
  children: React.ReactNode;
  mobilePadding?: true | false;
}

export const Container = ({ children, mobilePadding }: Props) => {
  if (!mobilePadding) {
    return (
      <div className="mx-auto container px-0 sm:px-16 lg:px-24 xl:px-32 2xl:px-40">
        {children}
      </div>
    );
  }

  return <div className="container mx-auto">{children}</div>;
};
