## With the introduction of React Hooks in React 16.8, functional components can now have state and lifecycle methods as class components.
## It’s therefore important to know how to write applications in an efficient and maintainable way.

Ok, let’s get started! 🎸

## 1. useState
useState() is a hook that allows you to add state to your functional components.
You use it by calling useState() and passing in the initial state as an argument. You would use useState() when you need to manage state in your components, such as managing form input or toggling a component’s visibility.

import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}
In the above code, we’re using useState() to manage the count state in our Counter component. We’re initializing the count state to 0, and we’re updating it using the setCount function whenever the user clicks the “Increment” button.

Pay attention:
The increment is asynchronous.

const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
    console.log(count); // still 0
  };
  
 ## 2. useEffect
useEffect() is a hook that allows you to run side effects in your functional components. You use it by calling useEffect() and passing in a function that contains the side effect. You would use useEffect() when you need to fetch data from an API, manipulate the DOM, or perform other side effects in your components.

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
In the above code, we’re using useEffect() to fetch a list of users from the JSONPlaceholder API and update the users state in our UserList component. We’re passing an empty array as the second argument to useEffect(), which means that the effect will only run once when the component mounts.

## 3. useContext
useContext() is a hook that allows you to access data from a parent component in your child components without having to pass it down through props. You use it by calling useContext() and passing in the context object that you want to use. You would use useContext() when you need to access global data, such as a user’s authentication status or theme settings.

import React, { useContext } from 'react';
import { UserContext } from './UserContext';

function UserProfile() {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
    </div>
  );
}
In the above code, we’re using useContext() to access the user context data in our UserProfile component. We’re destructuring the user object from the UserContext, which was created using the createContext() function.

## 4. useReducer
useReducer() is a hook that allows you to manage state in a more complex way than useState(). You use it by calling useReducer() and passing in a reducer function and the initial state. It returns an array with two elements: the current state value and a dispatch function to update the state. You would use useReducer() when you need to manage state that involves multiple actions, such as managing a shopping cart or a game state.

import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleIncrement = () => {
    dispatch({ type: 'increment' });
  };

  const handleDecrement = () => {
    dispatch({ type: 'decrement' });
  };

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}
In the above code, we’re using useReducer() to manage the count state in our Counter component. We’re defining an initial state object with a count property set to 0, and we’re defining a reducer function that updates the state based on the action type. We’re using dispatch() to trigger the reducer function when the user clicks the “Increment” or “Decrement” buttons.

## 5. useRef
useRef() is a hook that allows you to create a mutable value that persists across re-renders. You use it by calling useRef() and passing in an initial value. It returns a ref object that has a current property which holds the current value of the ref. You would use useRef() when you need to access a value in a callback function or when you need to access a DOM node or a mounted component.

Ex.1: Mutable variable that persists across renders

import React, { useRef } from 'react';

function Counter() {
  // mutable variable that persists across renders
  const countRef = useRef(0);

  const handleIncrement = () => {
    countRef.current++;
    console.log(countRef.current); // 1 (different from the above useState)
  };

  return (
    <div>
      <h1>Count: {countRef.current}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}
Ex.2: Storing a reference to a DOM element:

import React, { useRef, useEffect } from 'react';

function ScrollIndicator() {
  const indicatorRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.body.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      const scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;
      indicatorRef.current.style.width = `${scrollPercent}%`;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="scroll-indicator">
      <div ref={indicatorRef} className="scroll-indicator__progress"></div>
    </div>
  );
}
In the above code, we’re using useRef() to create a reference to the div element that represents the scroll indicator. We’re then using this reference in the useEffect() hook to update the width of the scroll indicator based on the user’s scroll position.

Conclusions 💭
In conclusion, React hooks provide a powerful way to manage state and lifecycle events in functional components. By using hooks like useState(), useEffect(), useContext(), useCallback(), and useRef(), you can simplify your code and make it easier to read and maintain.

By mastering these hooks and understanding when and how to use them, you can create React applications that are more efficient, more readable, and more maintainable.

Additional 🪄
Here is a list of all the remaining hooks available in React:

useCallback(): allows you to memoize a function so that it’s not recreated on every render.
useMemo(): allows you to memoize a value so that it’s not recomputed on every render.
useLayoutEffect(): similar to useEffect, but fires before the browser repaints the screen.
useInsertionEffect(): similar to useEffect, but fires before React makes changes to the DOM.
useImperativeHandle(): allows you to expose certain methods or properties of a child component to its parent component.
useDebugValue(): allows you to display a label for custom hooks in the React DevTools.
useTransition(): allows you to mark a state transition as non-blocking and allow other updates to interrupt it.
useDeferredValue(): allows you to defer updating a non-critical part of the UI and let other parts update first.
useId(): lets a component associate a unique ID with itself. Typically used with accessibility APIs.
useSyncExternalStore(): lets a component subscribe to an external store.
