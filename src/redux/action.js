import { countKurang, countTambah } from "./typeRedux";

export const decrement = (value) => {
  return {
    type: countKurang,
    value: value,
  };
};
export const increment = (value) => {
  return {
    type: countTambah,
    value: value,
  };
};
export const decrementCheckAction = (value) => {
  return (dispatch, getstate) => {
    if (getstate().counter.count > 0) {
      dispatch(decrement(value));
    }
  };
};
