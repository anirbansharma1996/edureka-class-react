
## [to create a react app : npx create-react-app 'your-app-name']
## [to install any node package : npm install 'package-name']
(npm = node package manager) link : https://www.npmjs.com


## With the introduction of React Hooks in React 16.8, functional components can now have state and lifecycle methods as class components.
## It’s therefore important to know how to write applications in an efficient and maintainable way.

Ok, let’s get started! 🎸

## 1. useState
useState() is a hook that allows you to add state to your functional components.
You use it by calling useState() and passing in the initial state as an argument. You would use useState() when you need to manage state in your components, such as managing form input or toggling a component’s visibility.
  
 ## 2. useEffect
useEffect() is a hook that allows you to run side effects in your functional components. You use it by calling useEffect() and passing in a function that contains the side effect. You would use useEffect() when you need to fetch data from an API, manipulate the DOM, or perform other side effects in your components.

## 3. useContext
useContext() is a hook that allows you to access data from a parent component in your child components without having to pass it down through props. You use it by calling useContext() and passing in the context object that you want to use. You would use useContext() when you need to access global data, such as a user’s authentication status or theme settings.

## 4. useReducer
useReducer() is a hook that allows you to manage state in a more complex way than useState(). You use it by calling useReducer() and passing in a reducer function and the initial state. It returns an array with two elements: the current state value and a dispatch function to update the state. You would use useReducer() when you need to manage state that involves multiple actions, such as managing a shopping cart or a game state.

## 5. useRef
useRef() is a hook that allows you to create a mutable value that persists across re-renders. You use it by calling useRef() and passing in an initial value. It returns a ref object that has a current property which holds the current value of the ref. You would use useRef() when you need to access a value in a callback function or when you need to access a DOM node or a mounted component.

## Additional 🪄
Here is a list of all the remaining hooks available in React:

## useCallback(): allows you to memoize a function so that it’s not recreated on every render.
## useMemo(): allows you to memoize a value so that it’s not recomputed on every rende
## useLayoutEffect(): similar to useEffect, but fires before the browser repaints the screen.
## useInsertionEffect(): similar to useEffect, but fires before React makes changes to the DOM.
## useImperativeHandle(): allows you to expose certain methods or properties of a child component to its parent component.
## useDebugValue(): allows you to display a label for custom hooks in the React DevTools.
## useTransition(): allows you to mark a state transition as non-blocking and allow other updates to interrupt it.
## useDeferredValue(): allows you to defer updating a non-critical part of the UI and let other parts update first.
## useId(): lets a component associate a unique ID with itself. Typically used with accessibility APIs.
## useSyncExternalStore(): lets a component subscribe to an external store.
