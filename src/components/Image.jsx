export const Image = ({ src, className, children, alt }) => {
  return (
    <img className={className} src={src} alt={alt}>
      {children}
    </img>
  );
};
