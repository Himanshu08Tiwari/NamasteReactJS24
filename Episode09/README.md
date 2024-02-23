## Q: When and why do we need lazy()?

lazy() It is a new function in react that lets you load react components lazily through code splitting without help from any additional libraries. Lazy loading is the technique of rendering only-needed or critical user interface items first, then quietly unrolling the non-critical items later.

## Q: What is suspense?

React Suspense's data fetching feature makes managing asynchronous data loading in your React apps easier. React Suspense allows you to postpone rendering until the data is available, enhancing user experience by offering fallback content or loading indications.

## Q: Why we got this error : A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition? How does suspense fix this error?

## Q: Advantages and disadvantages of using this code splitting pattern?

Bundling is great, but as your app grows, your bundle will grow too. Especially if you are including large third-party libraries. You need to keep an eye on the code you are including in your bundle so that you don’t accidentally make it so large that your app takes a long time to load.

To avoid winding up with a large bundle, it’s good to get ahead of the problem and start “splitting” your bundle.

Code-splitting your app can help you “lazy-load” just the things that are currently needed by the user, which can dramatically improve the performance of your app. While you haven’t reduced the overall amount of code in your app, you’ve avoided loading code that the user may never need, and reduced the amount of code needed during the initial load.

## Q: When do we and why do we need suspense?

```
<Suspense fallback={<Loading />}>
  <SomeComponent />
</Suspense>
```
