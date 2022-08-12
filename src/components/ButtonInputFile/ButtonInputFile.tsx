import useButtonInputFile from "./hooks/useButtonInputFile";

interface ButtonInputFileProps {
  fn: () => void;
}

const ButtonInputFile = ({ fn }: ButtonInputFileProps) => {
  const { onChange } = useButtonInputFile(fn);

  return (
    <div>
      <input
        type="file"
        id="file"
        style={{ opacity: 0, position: "absolute" }}
        onChange={onChange}
      />
    </div>
  );
};

export default ButtonInputFile;
