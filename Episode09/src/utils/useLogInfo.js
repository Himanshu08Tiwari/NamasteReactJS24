import { useEffect, useState } from "react";

export const useLogInfo = () => {
  const [logInfo, setLogInfo] = useState(true);

  useEffect(() => {
    window.addEventListener("online", () => {
      setLogInfo(true);
    });
    window.addEventListener("offline", () => {
      setLogInfo(false);
    });
  }, []);

  return logInfo;
};
