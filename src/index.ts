import { useRef, useEffect } from "react";

interface Props {
  type?: 'scroll' | 'hidden';
  gap?: number;
}

const useHorizontalScroll = (props?: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.style.display = 'flex';
      ref.current.style.overflowX = props?.type ?? 'hidden';
      ref.current.style.gap = `${props?.gap ?? 0}px`;

      const childrens = Array.from(ref.current.children as HTMLCollectionOf<HTMLElement>);

      childrens.forEach(
        (children) => (children.style.flex = "0 0 auto")
      );
      
      ref.current.addEventListener("wheel", (event: WheelEvent) => {
        event.preventDefault();
        if (ref.current) {
          ref.current.scrollLeft += event.deltaY;
        }
      });
    }
  }, [ref]);

  return { ref };
};

export default useHorizontalScroll;
