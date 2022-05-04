import classNames from "classnames";
import { useState } from "react";
import useHorizontalScroll from "@revolt-digital/use-horizontal-scroll";

const images = [
  "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80",
  "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80",
  "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80",
  "https://images.unsplash.com/photo-1605405748313-a416a1b84491?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80",
];

function App() {
  const [isOverlowHidden, setOverflowHidden] = useState(false);
  const { ref } = useHorizontalScroll();

  const handleOverflowHidden = () => {
    setOverflowHidden((prev) => !prev);
  };

  const renderImagesMap = () => {
    return images.map((person, index) => {
      return (
        <div key={index} className="flex-none">
          <div className="flex flex-col items-center gap-3 border p-4">
            <img className="w-80 h-80 rounded-full object-cover" src={person} />
            <strong className="text-black text-2xl font-medium">
              User {index}
            </strong>
          </div>
        </div>
      );
    });
  };

  const scrollTypeCSS = classNames("flex gap-3O", {
    "overflow-x-scroll": !isOverlowHidden,
    "overflow-x-hidden": isOverlowHidden,
  });

  return (
    <div className="container mx-auto space-y-3 px-4 my-20">
      <div className="max-w-md space-y-3 text-center mx-auto">
        <h1 className="text-4xl">useHorizontalScroll</h1>
        <p className="text-sm text-gray-800 bg-gray-100 p-4">
          You can change to the parent <i>overflow-x: hidden</i> instead of{" "}
          <i>scroll</i> to make it like a carousel.
        </p>
        <button
          type="button"
          className="text-sm text-gray-800 bg-gray-100 p-4 font-bold"
          onClick={handleOverflowHidden}
        >
          Click here to toggle overflow-x: hidden/scroll
        </button>
      </div>
      <main className={scrollTypeCSS} ref={ref}>
        {renderImagesMap()}
      </main>
    </div>
  );
}

export default App;
