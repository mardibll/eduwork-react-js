import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementCheckAction, increment } from "../redux/action";
export default function Calculator() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  return (
    <div>
      <button
        style={{ padding: 8 }}
        onClick={() => dispatch(decrementCheckAction(1))}
      >
        -
      </button>
      <span style={{ padding: 7, fontSize: 25 }}>{count}</span>
      <button style={{ padding: 8 }} onClick={() => dispatch(increment(1))}>
        +
      </button>
    </div>
  );
}
