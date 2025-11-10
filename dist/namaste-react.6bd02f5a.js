/**
 * ReactElement(Object) => HTML(BROWSER UNDERSTANDS)
 * 
 * **/ const parent = React.createElement('div', {
    id: "parent"
}, [
    React.createElement('div', {
        id: "child"
    }, [
        React.createElement('h1', {}, "I am h1 tag!"),
        React.createElement('h2', {}, "I am h2 tag!")
    ]),
    React.createElement('div', {
        id: "child"
    }, [
        React.createElement('h1', {}, "I am h1 tag!"),
        React.createElement('h2', {}, "I am h2 tag!")
    ])
]);
// heading here is basically a react element ie a javascript object
const heading = React.createElement('h1', {
    id: "heading"
}, "HELLO WORLD FROM REACT & TEAM!");
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);

//# sourceMappingURL=namaste-react.6bd02f5a.js.map
