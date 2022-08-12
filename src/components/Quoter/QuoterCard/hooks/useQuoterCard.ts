import React, { useEffect } from "react";
import { useState } from "react";

const useQuoterCard = () => {
  const [loading, setLoading] = useState(true);

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const loadingQuote = async () => {
    setLoading(true);
    await delay(2000);
    setLoading(false);
  };

  useEffect(() => {
    loadingQuote();
  }, []);

  return {
    loading,
  };
};

export default useQuoterCard;
