export const Input = ({ className, ...props }) => (
  <input
    className={`border border-gray-300 rounded-lg px-4 py-2 ${className}`}
    {...props}
  />
);