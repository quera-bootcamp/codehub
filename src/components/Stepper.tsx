import React from "react";

interface Step {
  id: number;
  label: string;
  completed: boolean;
}

const steps: Step[] = [
  { id: 1, label: "خلاصه خرید", completed: false },
  { id: 2, label: "آدرس", completed: true },
  { id: 3, label: "ورود", completed: true },
];

const Stepper: React.FC = () => {
  return (
    <div className="flex items-center">
      {steps.map((step) => (
        <div
          key={step.id}
          className={`flex items-center ${
            step.id < steps.length ? "w-full" : ""
          }`}
        >
          <div className="flex flex-col items-center">
            <span
              className={`text-sm mb-4 ${
                step.completed
                  ? "text-success-400"
                  : "text-default-950 font-bold"
              }`}
            >
              {step.label}
            </span>

            <div>{step.completed && <span>✅</span>}</div>
          </div>

          {step.id < steps.length && (
            <div className="flex-1 mx-4">
              <div
                className={`border-t-2 ${
                  steps[step.id]?.completed
                    ? "border-green-500"
                    : "border-gray-300"
                }`}
              ></div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Stepper;
