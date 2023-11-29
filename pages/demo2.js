import { useReducer } from 'react';

export default function Demo2() {
  function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        return state + action.incrementValue;
      default:
        return action;
    }
  }
  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <h2>Counter with useReducer</h2>
      <button
        onClick={() => dispatch({ type: 'increment', incrementValue: 3 })}
      >
        Increment
      </button>
      <div>{state}</div>
    </>
  );
}
