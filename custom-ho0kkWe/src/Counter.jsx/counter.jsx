import { useReducer } from "react";

const INCREMENT_COUNTER = "INCREMENT_COUNTER";
const DECREMENT_COUNTER = "DECREMENT_COUNTER";
function reducer(state, action) {
  switch (action.type) {
    case INCREMENT_COUNTER: {
      return {
        ...state,
        counter: state.counter + 1
      };
    }
    case DECREMENT_COUNTER: {
      return {
        ...state,
        counter: state.counter - 1
      };
    }
    default: {
      return state;
    }
  }
}

export function Counter({ initailValue = 20 }) {
  const [state, dispatch] = useReducer(reducer, {
    counter: initailValue
  });
  const handleChange = (type) => {
    dispatch({
      type
    });
  };
  console.log(state.counter);
  return (
    <div>
      <h3>Counter</h3>
      <h3>{state.counter}</h3>
      <div>
        <button onClick={() => handleChange(INCREMENT_COUNTER)}>
          INCREMENT
        </button>
        <button onClick={() => handleChange(DECREMENT_COUNTER)}>
          DECREMENT
        </button>
      </div>
    </div>
  );
}
