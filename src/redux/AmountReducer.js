const AmountReducer = (state, action) => {
  switch (action.type) {
    case "amount":
      return { ...state, amount: state.amount };
    default:
      return { ...state };
  }
};
