import React from "react";

interface InputFormProps {
  label: string;
  type: string;
  name: string;
  placeholder: string;
  className?: string; // Tambahkan className sebagai opsional
}

const InputForm: React.FC<InputFormProps> = ({
  label,
  type,
  name,
  placeholder,
  className,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        className={`bg-white border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      />
    </div>
  );
};

export default InputForm;
