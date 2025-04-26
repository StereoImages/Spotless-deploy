export const Button = ({ className, children, ...props }) => (
  <button className={`rounded-xl px-4 py-2 font-semibold ${className}`} {...props}>
    {children}
  </button>
);