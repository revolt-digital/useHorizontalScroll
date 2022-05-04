# :left_right_arrow: useHorizontalScroll

A package to easily create horizontal scrolling on flex elements.

## Usate

- Install the package

```
  npm install @revolt-digital/use-horizontal-scroll

  yarn add @revolt-digital/use-horizontal-scroll
```

- Step 1, create a layout that you want to make scrolleable


```html
<section className="flex overflow-x-hidden">
  <div className="flex-none">
    ...
  </div>
  <div className="flex-none">
    ...
  </div>
  <div className="flex-none">
    ...
  </div>
  ...
</section>
```

> Important: Parent `div` must have `display: flex` and `overflow-x: hidden | scroll` css styles

- Step 2, import and assign ref to your `div element`.

```javascript
import useHorizontalScroll from "@revolt-digital/use-horizontal-scroll";

export default () => {
  const { ref } = useHorizontalScroll();

  return (
    <section className="flex overflow-x-hidden" ref={ref}>
      <div className="flex-none">
        ...
      </div>
      <div className="flex-none">
        ...
      </div>
      <div className="flex-none">
        ...
      </div>
    </section>
  );
}
```
