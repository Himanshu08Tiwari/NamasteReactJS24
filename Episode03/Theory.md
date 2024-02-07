## What is `JSX`?

JSX is a Markup language used in order to create React elements. The markup can be used to represent a standalone single component or a complex component. 
The syntax for writing JSX is:
```
<OpeningTag>...Content...</ClosingTag>
<OpeningTag />

```
A typical component in React would look like:
```
<div>This is a div</div> // displays a block of text
<Clock timezone="gmt" /> // displays a clock with the current time
```
You may be wondering if this looks like HTML, and behaves like HTML, then it must be HTML? 
Sorry to burst your bubble but its actually JSX, a markup language similar to HTML but actually an extension to JavaScript instead. We will see how it differ from HTML as we pave our way forward in this blog.

#### Case Sensitivity
How does React differentiate our custom elements from the HTML elements? 

It does using case sensitivity. It is recommended that we use Pascal casing for our React components <ReactComponent /> while lower casing for HTML elements <section>...</section> .
If we violate these rules, then the React compiler or the developer console will give the following warning:
```
Warning: reactComponent /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.
```


#### Limitations:
With great power comes great limitations. Since we are using JSX, a JavaScript extension therefore we are limiting some of the norms of HTML.
-  The typical `class` attribute used with every element is replaced with `className`.
-  The `for` attribute used in the label element is replaced with `htmlFor` instead.
-  Furthermore, comments are no longer written as `<!-- comment -->`, but instead are written like `{/* comment */} or {// comment}`.

Example:

```
<!-- HTML -->
<div id="div" class="abc">This is a div</div>
<label for="div">Label</label>
```

```
{/* JSX */}
<div id="div" className="abc">This is a div</div>
<label htmlFor="div">Label</label>
```

#### Library Import:
At the end of the day, JSX markup’s goal is to create a React element, therefore you must have the React library in scope, otherwise you would get the following error:
```
'React' must be in scope when using JSX.
```
resolution-
```
import React from 'react';
```

### Transpiler:
Modern Browsers such as Chrome, Safari or Firefox don’t understand JSX directly, so how does JSX fit into all this?

This is where `babel` comes into play. `Babel` is a build tool used in your development environment that is used to convert the JSX into pure JavaScript. This allows you to build modern apps using JSX without you having to worry about rendering specifics.

`Note: There are other transpilers out there but babel is considered as the defacto standard since it has a lot more features that aid us during developing applications.`



## Superpowers of JSX:

- JSX as variables:
JSX elements can act as values for identifiers.
```
const hello = <h1>Hello, World!</h1>;
```

- Expressions in JSX:
JSX supports all JavaScript Expressions by wrapping them inside a pair of curly brackets. The following example displays how to use a primary expression and a combination of object access and function invocation expression.
```
const name = "Danyal";
const hello = <h1>Hello, {name}</h1>;
```
```
const time = "Current time: {Clock.getUserTimeZoneCurrentTime()}";
```
Similarly, JSX elements are also expressions and can be be used in places such as control statements or loops.

- Attributes in JSX:
JSX supports attributes the same way as HTML does except for the fact that attributes are written in camelCasing instead of kebab-casing for an attribute that spans multiple words.
```
<!-- HTML -->
<img src="..path_to_img../img.jpg" accesskey="img" />
```
```
{/* JSX */}
const imgSrc = "..path_to_img../img.jpg";
<img src={imgSrc} accessKey="img" />
```