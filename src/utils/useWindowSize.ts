import { useState, useEffect } from "react";

const useWindowSize = (): { width: number, height: number } => {
  const getSize = () => {
    if (typeof window !== 'object') {
        return {
            width: undefined,
            height: undefined
        }
    }
    return {
        width: window.innerWidth,
        height: window.innerHeight
    }
  };

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    if (typeof window !== 'object') {
        return;
    }

    const handleResize = () => {
      setWindowSize(getSize());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window?.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
};

export default useWindowSize;
