export const Image = ({ src, className, children }) => {
  return (
    <img className={className} src={src}>
      {children}
    </img>
  );
};
