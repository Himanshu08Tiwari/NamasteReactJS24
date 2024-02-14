## What is the difference between Named Export, Default export and \* as export?.

ES6 provides us to import & export a module and use it in other files. ES6 provides two ways to export a module from a file: `named export` and `default export`.
In `Named export`, one can have multiple named exports per file. Then import the specific exports they want surrounded in `{}` braces. The name of imported module has to be the same as the name of the exported module.
In `Named export`, the component is exported from MyComponent.js file like:

```
export const MyComponent = () => {}
export const MyComponent2 = () => {}
```

and the component is imported from MyComponent.js file like: here we must use `{}` in MyComponent.

```
// ex. importing a single named export
import { MyComponent } from "./MyComponent";

// ex. importing multiple named exports
import { MyComponent, MyComponent2 } from "./MyComponent";

// ex. giving a named import a different name by using "as":
import { MyComponent2 as MyNewComponent } from "./MyComponent";
```

In `Default export`, One can have only one default export per file. The naming of import is completely independent in default export and we can use any name we like.
In `Default export`, the component is exported from MyComponent.js file like:

```
const MyComponent = () => {}
export default MyComponent;
```

and the component is imported from MyComponent.js file like: here we must omit `{}` in MyComponent.

```
import MyComponent from "./MyComponent";
```

In `* as export`, it is used to import the whole module as a component and access the components inside the module.
In `* as export`, the component is exported from MyComponent.js file like:

```
export const MyComponent = () => {}
export const MyComponent2 = () => {}
export const MyComponent3 = () => {}
```

and the component is imported from MyComponent.js file like:

```
import * as MainComponents from "./MyComponent";
```

Now we can use them in JSX as:

```
<MainComponents.MyComponent />
<MainComponents.MyComponent2 />
<MainComponents.MyComponent3 />
```

We can use `Named export` and `Default export` together. So you should export like:

```
export const MyComponent2 = () => {}
const MyComponent = () => {}
export default MyComponent;
```

and import like:

```
import MyComponent, {MyComponent2} from "./MyComponent";
```

## What is the importance of config.js file

`config.js` files are essentially editable text files that contain information required for the successful operation of a program. The files are structured in a particular way formatted to be user configurable.
Most of the computer programs we use: whether office suites, web browsers, even video games are configured via menu interfaces.
Configuration files are very simple in structure. For instance, if you were to write an application, and the only thing it ever needed to know was its user's preferred name, then its one and only config file could contain exactly one word: the name of the user. For example:

```
Chetan
```

Usually, though, an application needs to keep track of more than just one piece of information, so configuration often uses a key and a value:

```
NAME='Chetan'
SURNAME='Nada'
```

## What are React Hooks?

Q:What are React Hooks?
React Hooks are functions that allow you to use React state and other features in function components. Prior to Hooks, state could only be used in class components and functional components were limited to displaying data passed in through props. Hooks provide a way to use state, context, and other features in functional components.

Q: `Types of React Hooks`:
There are two types of Hooks in React:

1. `State Hooks`:
   State Hooks are a type of React Hook that allows you to manage state in functional components. Prior to the introduction of Hooks, state management was only possible in class components using the setState() method. With State Hooks, you can add state to your functional components and update it whenever necessary.

2. `Effect Hooks`:
   Effect Hooks are a type of React hook that allows you to add side effects to your functional components. Side effects are actions that happen in your component other than rendering. These actions can include fetching data from an API, setting up timers, updating the DOM, or subscribing to events.

3. In addition to State Hooks and Effect Hooks, there is also a third type of Hooks in React called Additional Hooks. These Hooks are built-in hooks provided by React to handle specific use cases and simplify common tasks in functional components.

`Why should we use React Hooks`?
React Hooks have several benefits, including:
`Simplified Code`: Hooks eliminate the need for classes and make it easier to write and read code.
`Reusable Logic`: Hooks allow you to reuse stateful logic across components, reducing the amount of code you need to write.
`Better Performance`: Because Hooks eliminate the need for classes, they can improve performance by reducing memory usage and increasing speed.

`Commonly used Hooks`:
Hooks are an important feature in React that allow functional components to have stateful logic and access to React’s component lifecycle methods. In this section, we will discuss some of the most commonly used Hooks in React and their functionality.

`useState()`:
useState() is a State Hook that allows you to add state to your functional components. With this hook, you can create and manage state variables. The useState hook takes an initial state as an argument and returns an array containing the current state and a function to update the state.
Here is an example:

```
import React, { useState } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

In the above example, useState() is used to add state to the Example component. The state variable count is initialized to 0, and the setCount function is used to update the state.

`useEffect()`:
useEffect() is an Effect Hook that allows you to perform side effects in your functional components, such as fetching data, subscribing to events, or updating the DOM. The useEffect hook takes a function as an argument and runs it after every render.
Here is an example:

```
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

In the above example, useEffect() is used to update the document title after every render based on the current value of count.

`useContext`: To return the current value for a context.
`useReducer`: A useState alternative to help with complex state management.
` `: It returns a memorized version of a callback to help a child component not re-render unnecessarily.
`useMemo`: It returns a memoized value that helps in performance optimizations.
`useRef`: It returns a ref object with a current property. The ref object is mutable. It is mainly used to access a child component imperatively.
`useLayoutEffect`: It fires at the end of all DOM mutations. It's best to use useEffect as much as possible over this one as the useLayoutEffect fires synchronously.
useDebugValue: Helps to display a label in React DevTools for custom hooks.
