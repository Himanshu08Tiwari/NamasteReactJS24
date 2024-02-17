## Q: What is a Microservice?

Microservices are an architectural and organizational approach to software development where software is composed of small independent services that communicate over well-defined APIs. These services are owned by small, self-contained teams.

Microservices architectures make applications easier to scale and faster to develop, enabling innovation and accelerating time-to-market for new features.

## Q: What is Monolith architecture?

A monolithic architecture is a traditional software development model that uses one code base to perform multiple business functions

## Q: What is the difference between Monolith and Microservice?

With monolithic architectures, all processes are tightly coupled and run as a single service. This means that if one process of the application experiences a spike in demand, the entire architecture must be scaled. Adding or improving a monolithic application’s features becomes more complex as the code base grows. This complexity limits experimentation and makes it difficult to implement new ideas. Monolithic architectures add risk for application availability because many dependent and tightly coupled processes increase the impact of a single process failure.

With a microservices architecture, an application is built as independent components that run each application process as a service. These services communicate via a well-defined interface using lightweight APIs. Services are built for business capabilities and each service performs a single function. Because they are independently run, each service can be updated, deployed, and scaled to meet demand for specific functions of an application.

## Q: Why do we need a useEffect Hook?

##### What does useEffect do?

By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates. In this effect, we set the document title, but we could also perform data fetching or call some other imperative API.

##### Why is useEffect called inside a component?

Placing useEffect inside the component lets us access the count state variable (or any props) right from the effect. We don’t need a special API to read it — it’s already in the function scope. Hooks embrace JavaScript closures and avoid introducing React-specific APIs where JavaScript already provides a solution.

##### Does useEffect run after every render?

Yes! By default, it runs both after the first render and after every update. Instead of thinking in terms of “mounting” and “updating”, you might find it easier to think that effects happen “after render”. React guarantees the DOM has been updated by the time it runs the effects.

##### Detailed Explanation

Now that we know more about effects, these lines should make sense:

```
function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
}
```

We declare the count state variable, and then we tell React we need to use an effect. We pass a function to the useEffect Hook. This function we pass is our effect. Inside our effect, we set the document title using the document.title browser API. We can read the latest count inside the effect because it’s in the scope of our function. When React renders our component, it will remember the effect we used, and then run our effect after updating the DOM. This happens for every render, including the first one.

Experienced JavaScript developers might notice that the function passed to useEffect is going to be different on every render. This is intentional. In fact, this is what lets us read the count value from inside the effect without worrying about it getting stale. Every time we re-render, we schedule a different effect, replacing the previous one. In a way, this makes the effects behave more like a part of the render result — each effect “belongs” to a particular render.

## Q: What is Optional Chaining?

The optional chaining (?.) operator accesses an object's property or calls a function. If the object accessed or function called using this operator is undefined or null, the expression short circuits and evaluates to undefined instead of throwing an error.

```
const adventurer = {
  name: 'Alice',
  cat: {
    name: 'Dinah',
  },
};

const dogName = adventurer.dog?.name;
console.log(dogName);
// Expected output: undefined

console.log(adventurer.someNonExistentMethod?.());
// Expected output: undefined

```

## Q: What is Shimmer UI?

Shimmer is a temporary animation placeholder for when data from the service call takes time to get back and we don't want to block rendering the rest of the UI.

## Q: What is the difference between JS expression and JS statement?

`Expressions`
At its core, an expression is a bit of JavaScript code that produces a value.
`Statements`
A JavaScript program is a sequence of statements. Each statement is an instruction for the computer to do something.

Expressions produce a value, and that value will be passed into the function. Statements don't produce a value, and so they can't be used as function arguments.

## Q: What is Conditional Rendering, explain with a code example?

In React, conditional rendering is the process of displaying different content based on certain conditions or states. It allows you to create dynamic user interfaces that can adapt to changes in data and user interactions.

In React, there are different ways to conditionally render content based on the state of a component or other conditions. Two common ways are using the ternary operator and the && operator.

```
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  return (
    <div>
      {isLoggedIn ? (
        <h1>Welcome back!</h1>
      ) : (
        <h1>Please sign up.</h1>
      )}
    </div>
  );
}
```

ternary operator
In the above code, we used the ternary operator isLoggedIn ? ... : ... to conditionally render the message depending on whether the user is logged in or not.

```
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  return (
    <div>
      {isLoggedIn && <h1>Welcome back!</h1>}
    </div>
  );
}
```

&& operator
In the above code, we used the && operator to conditionally render the message if isLoggedIn is true.

Both of these methods are effective for conditionally rendering content in React. Which one to use often comes down to personal preference or the specific use case.

The ternary operator may be more useful when there are multiple conditions to check, while the && operator can be simpler and more concise when there is only one condition.

## Q: What is CORS?

##### What is Cross-Origin Resource Sharing?

Cross-origin resource sharing (CORS) is a mechanism for integrating applications. CORS defines a way for client web applications that are loaded in one domain to interact with resources in a different domain. This is useful because complex applications often reference third-party APIs and resources in their client-side code. For example, your application may use your browser to pull videos from a video platform API, use fonts from a public font library, or display weather data from a national weather database. CORS allows the client browser to check with the third-party servers if the request is authorized before any data transfers.

##### Need of CORS?

Cross-origin resource sharing (CORS) is an extension of the same-origin policy. You need it for authorized resource sharing with external third parties. For example, you need CORS when you want to pull data from external APIs that are public or authorized. You also need CORS if you want to allow authorized third-party access to your own server resources.

##### How does cross-origin resource sharing work?

In standard internet communication, your browser sends an HTTP request to the application server, receives data as an HTTP response, and displays it. In browser terminology, the current browser URL is called the current origin and the third-party URL is cross-origin.

When you make a cross-origin request, this is the request-response process:

-> The browser adds an origin header to the request with information about the current origin's protocol, host, and port.

-> The server checks the current origin header and responds with the requested data and an Access-Control-Allow-Origin header.

-> The browser sees the access control request headers and shares the returned data with the client application.

Alternatively, if the server doesn’t want to allow cross-origin access, it responds with an error message.

## Q: What is async and await?

`Async`: It simply allows us to write promises-based code as if it was synchronous and it checks that we are not breaking the execution thread. It operates asynchronously via the event loop. Async functions will always return a promise. It makes sure that a promise is returned and if it is not returned then JavaScript automatically wraps it in a promise which is resolved with its value.

`Await`: Await function is used to wait for the promise. It could be used within the async block only. It makes the code wait until the promise returns a result. It only makes the async block wait.

for example:

```
// async function getRestaurant to fetch Swiggy API data
  async function getRestaurants() {
    const data = await fetch(
      "Swiggy_API_URL"
    );
    const json = await data.json();
    // we get the Swiggy API data in json format
    console.log(json);
  }
```

## Q: What is the use of `const json = await data.json();` in getRestaurants()?

The `data` object, returned by the `await fetch()`, is a generic placeholder for multiple data formats.
so we can extract the `JSON object` from a `fetch` response by using `await data.json()`.
`data.json()` is a method on the data object that lets you extract a `JSON object` from the data or response. The method returns a promise because we have used `await` keyword.
so `data.json()` returns a promise resolved to a `JSON object`.
