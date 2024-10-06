interface BadgeProps {
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({ children }) => {
  return <div className="bg-danger-600 text-danger-100 text-xs rounded-xl px-2 py-0.5 font-normal">{children}</div>;
};
