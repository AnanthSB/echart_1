import { useState, useEffect } from "react";


const useProModeData = (graphData) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(graphData);
  }, []);

  return [data];
};

export default useProModeData;