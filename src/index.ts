import { useRef, useEffect } from "react";

const useHorizontalScroll = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current?.addEventListener('wheel', (event: WheelEvent) => {
      event.preventDefault();
      if (ref.current) {
        ref.current.scrollLeft += event.deltaY;
      }
    });
  }, [ref]);

  return { ref };
};

export default useHorizontalScroll;
