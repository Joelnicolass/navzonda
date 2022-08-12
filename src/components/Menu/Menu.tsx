import React from "react";
import { useNavigate } from "react-router-dom";
import ButtonInputFile from "../ButtonInputFile/ButtonInputFile";

const Menu = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: "100vh",
        padding: "10px",
        border: "2px solid black",
        borderRadius: "15px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          borderRadius: "50%",
          width: "100px",
          height: "100px",
          cursor: "pointer",
          border: "2px solid black",
        }}
        onClick={() => navigate("/manual")}
      >
        Manual
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          borderRadius: "50%",
          width: "100px",
          height: "100px",
          cursor: "pointer",
          border: "2px solid black",
        }}
      >
        <ButtonInputFile fn={() => navigate("/chequera")} />
        Carga de archivos
      </div>
    </div>
  );
};

export default Menu;
