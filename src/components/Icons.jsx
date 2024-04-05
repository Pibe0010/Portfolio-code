import "./Icons.css";
export function Icons({ name, className, id }) {
  return (
    <span className={`material-symbols-outlined ${className}`} id={id}>
      {name}
    </span>
  );
}
