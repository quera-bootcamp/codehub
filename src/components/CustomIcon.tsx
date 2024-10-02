import React from "react";

interface CustomIconProps {
  selected: boolean;
  onClick: () => void;
}

export const CustomIcon: React.FC<CustomIconProps> = ({
  selected,
  onClick,
}) => {
  return (
    <svg
      className="cursor-pointer"
      onClick={onClick}
      width="13"
      height="14"
      viewBox="0 0 13 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.5"
        y="1"
        width="12"
        height="12"
        rx="6"
        fill={selected ? "black" : "none"}
      />

      <rect x="0.5" y="1" width="12" height="12" rx="6" stroke="#DB2777" />

      <rect
        x="2.6001"
        y="3.09961"
        width="7.8"
        height="7.8"
        rx="3.9"
        fill={selected ? "#DB2777" : "none"}
      />
    </svg>
  );
};
