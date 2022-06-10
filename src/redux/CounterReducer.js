const initialState = {
  count: 0,
  amount: 1,
  users: []
};

export default function CounterReducer(state = initialState, action) {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: action.counter + 1
      };
    case "decrement":
      return {
        ...state,
        count: action.counter - 1
      };
    case "totalIncrement":
      return {
        ...state,
        totalCount: action.counter + 1
      };
    case "totalDecrement":
      return {
        ...state,
        totalCount: action.counter - 1
      };
    default:
      return { ...state };
  }
}

export const {
  increment,
  decrement,
  totalIncrement,
  totalDecrement
} = CounterReducer;
