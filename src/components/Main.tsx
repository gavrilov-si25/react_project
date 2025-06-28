export type MainProps = {
  children?: React.ReactNode;
};

export const Main = ({ children }: MainProps): React.ReactElement => {
  return <main className="content">{children}</main>;
};
