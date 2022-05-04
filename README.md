# :left_right_arrow: useHorizontalScroll

A package to easily create horizontal scrolling on flex elements.

## Todo

- [] Options props to enable drag on desktop.
- [] Option prop to rewrite children width in mobile.
- [] Tests
- [] Instead of adding a `flex-none` children box, it will be built out of the box.
- [] Instead of adding `flex` and `overflow-x-hidden | scroll` it will be built out of the box (scroll type will be selected in options props)

## Usage

- Install the package

```bash
  npm install @revolt-digital/use-horizontal-scroll
  # or
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

## Running the example app

Run `yarn install` then `yarn build` in the root folder (the one with this README file).

Then move into the example folder `cd example` and run `yarn install` and `yarn start`.

Then go to `http://localhost:3000`
