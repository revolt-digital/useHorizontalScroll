import { useRef, useEffect } from "react";

const useHorizontalScroll = () => {
  const ref = useRef(null);

  useEffect(() => {
    ref.current?.addEventListener("wheel", (event) => {
      event.preventDefault();
      if (ref.current) {
        ref.current.scrollLeft += event.deltaY;
      }
    });
  }, [ref]);

  return { ref };
};

export default useHorizontalScroll;
