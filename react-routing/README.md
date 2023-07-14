# React Routing Install Steps

1. npm install react-router-dom.
2. in your index.js, import BrowserRouter from react and wrapp the <App /> component in it.
3. in App.js we import { Routes, Route } from react-router-dom.
4. Add your Routes element in order to add each Route.
5. A Route has a path (endpoint to call in your link tag) and and element (component to display)
6. Update navigation link with the NavLink import set the to path (to="") for your endpoint.
7. If your passing any params in a route, make sure to use the useParam method from react-router-dom to get the param that you are passing in.
