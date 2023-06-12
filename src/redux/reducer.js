import { countKurang, countTambah } from "./typeRedux";

const inisialisation = { count: 0 };
const counterReducer = (state = inisialisation, action) => {
  switch (action.type) {
    case countTambah:
      return {
        ...state,
        count: state.count + action.value ,
      };
    case countKurang:
      return {
        ...state,
        count: state.count - action.value,
      };
    default:
      return state;
  }
};
export default counterReducer;
