export const increment = (value) => ({
  type: "increment",
  increment: value
});

export const decrement = () => ({
  type: "decrement"
});

export const totalIncrement = () => ({
  type: "totalIncrement"
});

export const totalDecrement = () => ({
  type: "toTalDecrement"
});
