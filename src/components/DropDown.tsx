import { useState } from "react";

interface DropdownProps<T> {
  options: T[];
  defaultValue: T;
  onSelect?: (value: T) => void;
}

const Dropdown = <T extends string | number>({
  options,
  defaultValue,
  onSelect,
}: DropdownProps<T>) => {
  const [selectedValue, setSelectedValue] = useState<T>(defaultValue);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (value: T) => {
    setSelectedValue(value);
    setIsOpen(false);
    if (onSelect) {
      onSelect(value);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-between w-20 px-4 py-2 bg-default-50 border rounded-lg shadow-sm focus:outline-none"
      >
        <svg
          className={`w-4 h-4 transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
        <span>{selectedValue}</span>
      </button>

      {isOpen && (
        <ul className="absolute z-10 w-full mt-1 bg-default-50 border rounded-lg shadow-lg">
          {options.map((value, index) => (
            <li
              key={index}
              onClick={() => handleSelect(value)}
              className="px-4 py-2 cursor-pointer hover:bg-default-600"
            >
              {value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
