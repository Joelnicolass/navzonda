import React from "react";

interface SeparatorProps {
  size: "small" | "medium" | "large";
}

const Separator = ({ size }: SeparatorProps) => {
  return (
    <div
      style={
        size === "small"
          ? {
              margin: "10px",
            }
          : size === "medium"
          ? {
              margin: "20px",
            }
          : {
              margin: "30px",
            }
      }
    ></div>
  );
};

export default Separator;
