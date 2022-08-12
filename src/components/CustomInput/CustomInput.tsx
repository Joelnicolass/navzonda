import React from "react";

interface CustomInputProps {
  type?: string;
  placeholder?: string;
  style?: React.CSSProperties;
  name: string;
  value?: any;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput = ({
  type = "text",
  placeholder = "",
  name,
  style,
  value,
  onChange,
}: CustomInputProps) => {
  return (
    <>
      <input {...{ type, placeholder, name, onChange, value }} style={style} />
    </>
  );
};

export default CustomInput;
