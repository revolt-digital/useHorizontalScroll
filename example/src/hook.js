import { useRef, useEffect } from "react";

const useHorizontalScroll = ({ type }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.style.display = "flex";
      ref.current.style.overflowX = type;

      const scrollChildrens = Array.from(ref.current.children);

      scrollChildrens.forEach((children) => (children.style.flex = "0 0 auto"));

      ref.current.addEventListener("wheel", (event) => {
        event.preventDefault();
        ref.current.scrollLeft += event.deltaY;
      });
    }
  }, [ref]);

  return { ref };
};

export default useHorizontalScroll;
