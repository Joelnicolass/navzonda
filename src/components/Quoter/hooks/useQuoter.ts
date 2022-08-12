import React from "react";
import { useState } from "react";

const useQuoter = () => {
  const [newQuote, setNewQuote] = useState({
    amount: "",
    date: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewQuote({
      ...newQuote,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setNewQuote({
      amount: "",
      date: "",
    });
  };

  return {
    newQuote,
    handleChange,
    resetForm,
    setNewQuote,
  };
};

export default useQuoter;
