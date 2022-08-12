import React from "react";

interface CustomButtonProps {
  children?: any | any[];
  style?: React.CSSProperties;
  disabled?: boolean;
  onClick?: () => void;
}

const CustomButton = ({
  children = "Enviar",
  style,
  disabled = false,
  onClick,
}: CustomButtonProps) => {
  return (
    <>
      <button disabled={disabled} style={style} onClick={onClick}>
        {children}
      </button>
    </>
  );
};

export default CustomButton;
