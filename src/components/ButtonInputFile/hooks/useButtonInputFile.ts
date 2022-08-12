import React, { useEffect } from "react";
import { useState } from "react";

const useButtonInputFile = (fn: any) => {
  const [file, setFile] = useState<File | null | undefined>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files?.[0]);
  };

  useEffect(() => {
    if (file) {
      fn();
    }
  }, [file]);

  return {
    onChange,
  };
};

export default useButtonInputFile;
