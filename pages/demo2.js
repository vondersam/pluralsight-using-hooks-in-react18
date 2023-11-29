import { useReducer } from 'react';

export default function Demo2() {
  function reducer(state, action) {
    if (action.type === 'increment') {
      return state + 1;
    }
  }
  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <h2>Counter with useReducer</h2>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <div>{state}</div>
    </>
  );
}
