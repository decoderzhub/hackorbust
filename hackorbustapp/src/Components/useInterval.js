import { useEffect } from "react";

export function useInterval(callback, delay, acceptSSL) {
  // Set up the interval.
  useEffect(() => {
    
    function tick() {
        callback()
    }
    if (delay !== null && acceptSSL === false) {
      const id = setInterval(tick, delay);
      return () => {
        clearInterval(id);
      };
    }else{
        clearInterval()
    }
  }, [callback, delay, acceptSSL]);
}
