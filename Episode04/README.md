### Is JSX mandatory for React?

JSX is not a requirement for using React. Using React without JSX is especially convenient when you don’t want to set up compilation in your build environment.
Each JSX element is just syntactic sugar for calling React.createElement(component, props, ...children). So, anything you can do with JSX can also be done with just plain JavaScript.

```
const header = ()=>{
    return (
        <div className="header">Hello World</div>
    )
}

the above code will convert like this with the help of BABEL:
const header = React.createElement('div', {className:"header"}, "Hello WOrld");
```

#### Is ES6 mandatory for React?

ES6 is not mandatory for React but is highly recommendable. The latest projects created on React rely a lot on ES6. React uses ES6, and you should be familiar with some of the new features like: Classes, Arrow Functions, Variables(let, const). ES6 stands for ECMAScript 6. ECMAScript was created to standardize JavaScript, and ES6 is the 6th version of ECMAScript, it was published in 2015.

### {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX.

A: The Difference is stated below:

{TitleComponent}: This value describes the TitleComponent as a javascript expression or a variable or React element. The {} can embed a javascript expression or a variable or React element inside it.
<TitleComponent/> : This value represents a Component that is basically returning Some JSX value. In simple terms TitleComponent a function that is returning a JSX value. If component is written inside the {< />} expression.
<TitleComponent></TitleComponent> : <TitleComponent /> and <TitleComponent></TitleComponent> are equivalent only when < TitleComponent /> has no child components. The opening and closing tags are created to include the child components.

#### How can I write comments in JSX?

JSX is a syntax that gets compiled into valid JavaScript. Sometimes, for readability, you might need to add comments to your code. Like most programming languages, JSX has its own way to do this. To put comments inside JSX, you use the syntax {/\* \*/} to wrap around the comment text.

### What is <React.Fragment></React.Fragment> and <></> ?

React Fragment is a feature in React that allows you to return multiple elements from a React component by allowing you to group a list of children without adding extra nodes to the DOM. To return multiple elements from a React component, you'll need to wrap the element in a root element.

## What is Virtual DOM?

##### Q:1 What is DOM manipulation?

DOM manipulation refers to the process of modifying the structure, content, and style of a web page using JavaScript. In the traditional procedure of DOM manipulation, the changes made in DOM directly reflects to the web page, causing a slow and sluggish user experience. This is because the traditional process of DOM manipulation renders changes not only to the attributes changed, but to the complete web page.
As a solution to this time-consuming procedure, virtual DOM is introduced to the web page. Now let’s get to the point on understanding virtual DOM.

##### Q:2 What is Virtual DOM?

Virtual DOM is an abstraction of the actual Document Object Model (DOM) used by JavaScript to manipulate and update the structure and contents of a web page. Essentially, it is a concept in modern front-end frameworks like React, that provides a mechanism to efficiently update the user interface and ensure optimal performance.
No alt text provided for this image

##### Q:3 How does Virtual DOM work in React?

A React component is a self-contained unit of functionality that represents a part of the user interface. Components are reusable and can be combined to build complex user interfaces.
The virtual DOM is one of the most important concepts in React, with its first release in 2013. One of the key benefits of using virtual DOM is that it makes it possible to update user interface asynchronously.
It works by creating a copy of the actual DOM and updating of the actual DOM. When a change occurs in the virtual DOM, React compares the previous virtual DOM tree with the new virtual DOM tree to determine the minimum number of changes necessary to update the actual DOM. This process is called reconciliation, which is induced by diffing algorithm.
This approach makes it possible to perform updates to the UI without affecting the rest of the page, leading to improved performance and a smoother user experience.
Here, the virtual DOM acts as an intermediate between the actual DOM and the React components, allowing React to make updates to the DOM efficiently.
Once the virtual DOM has been updated, React updates the actual DOM with the least changes required. This reduces the number of DOM operations, which are slow and resource-intensive, and increases the overall performance of the application.
This image portrays the perfect example of rendering the data change only of the node whose data changed. In short, on every process of rendering, there is no loss of any other input value.

##### Q:4 The Functional aspects of Virtual DOM

Efficient updates and rendering
Optimization to minimize DOM operations
Lightweight in-memory representation of real DOM

##### Q:5 Benefits of using Virtual DOM in building React

Reduced complexity
Faster & smoother updates of UI
Enhanced application performance

### What is Reconciliation in React?

React Reconciliation is the process through which React updates the Browser DOM. It makes the DOM updates faster in React. It updates the virtual DOM first and then uses the diffing algorithm to make efficient and optimized updates in the Real DOM.

### What is React Fiber?

-> React Fiber: A fiber in a react is just a plain JavaScript object with some properties. The current react reconciler, the fiber reconciler is named after this object and is the default reconciler since react version 16.

React fiber is a complete rewrite of react that fixes a few long-standing issues and offers incredible and offers opportunities heading into the future.

-> Goals of React Fiber: Fiber focuses on animations and responsiveness. It has the ability to split work into chunks and prioritize tasks. We can pause work and come back to it later. We can also reuse previously completed work or maybe abort it if it is not needed. As opposed to the old React reconciler, it is asynchronous.

### Why we need keys in React? When do we need keys in React?

A “key” is a special string attribute you need to include when creating lists of elements in React. Keys are used in React to identify which items in the list are changed, updated, or deleted.

Keys are used to give an identity to the elements in the lists. It is recommended to use a string as a key that uniquely identifies the items in the list.

In React, the key attribute is used by the framework to uniquely identify DOM elements in a list. If a key is not specified, React may have difficulty in efficiently updating the list when new elements are added or existing ones are removed.
When a new item is added to a list, or an item is removed from the middle, the order of the remaining items may change. If the keys are not properly updated, React may wrongly assume that the DOM element represents the same component as before, even though this is not the case.
This can result in incorrect rendering or unexpected behaviour, and can even lead to performance issues. Therefore, it is important to use unique keys that can accurately identify each item in the list, especially when dealing with dynamic lists that are subject to frequent updates.

## What is props in React?

Props simply stands for properties. They are what make components reusable. Because they perform an essential function – they pass data from one component to another.

Props act as a channel for component communication. Props are passed from parent to child and help your child access properties that made it into the parent's tree.

It's worth noting that:

-> We use props in both functional and class-based components.
-> We pass props from the top to bottom. We can also refer to it as ancestor to descendant, or parent to child.
-> Props are read-only. This means that once a component receives a bunch of props, we cannot change it, but we can only use and consume it and cannot modify the properties passed down to the component. If we want to modify that, we'll have to introduce what we call state in React.

#### ways to add props?

### What is a Config Driven UI ?

Configuration-driven UI, also known as config-driven UI or configuration-based UI - When you build real a world application so you want should your website work in many country or many place we control our fontend it is known as using Config-Driven UI . API or Backend Driven which is data Comming from API.
or
In a configuration-driven UI, the layout, styles, and other properties of UI elements are defined in a configuration file or database, which can be easily modified without requiring changes to the codebase. This approach makes it easier to customize the UI for different use cases or user groups, without the need for extensive coding.
The configuration file or database may also define the data sources and the data to be displayed in the UI, as well as the interactions and behavior of the UI components. This allows for greater flexibility and adaptability of the UI to different use cases, as the configuration data can be easily modified or replaced without affecting the underlying application logic
