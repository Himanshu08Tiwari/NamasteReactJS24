const Parent = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" },
        [
            React.createElement("h1", {}, "I'm h1 tag.."),
            React.createElement("h2", {}, "I'm h2 tag.."),
            React.createElement("h3", {}, "I'm h3 tag.."),

        ]

    )
);




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(Parent);