The useReducer hook in React is an alternative to useState that allows you to manage more complex state logic in your components. It's particularly useful when you have state transitions that depend on the previous state and when the next state value is determined by an action.

Here's a basic example of using the useReducer hook:

//reducer.jsx
-------------------
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    default:
      return state;
  }
};

//count.jsx
--------------------
import React, { useReducer } from 'react';
const Counter = () => {
  // useReducer returns the current state and a dispatch function
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </div>
  );
};

export default Counter;
In this example:

The reducer function takes the current state and an action, and returns the new state.
The useReducer hook is called with the reducer function and the initial state ({ count: 0 }).
dispatch is a function returned by useReducer that you can use to dispatch actions to update the state.
When the "Increment," "Decrement," or "Reset" button is clicked, it dispatches the corresponding action to the reducer, and the state is updated accordingly.


