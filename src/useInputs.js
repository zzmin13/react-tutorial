import React, { useCallback, useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        [action.name]: action.value,
      };
    case "RESET":
      return action.initialForm;
    default:
      throw new Error("Unhandling Error");
  }
};
const useInputs = (initialForm) => {
  const [form, dispatch] = useReducer(reducer, initialForm);
  const onChange = useCallback((event) => {
    const { name, value } = event.target;
    dispatch({
      type: "CHANGE",
      name,
      value,
    });
  }, []);
  const reset = useCallback(() => {
    dispatch({
      type: "RESET",
      initialForm,
    });
  }, [initialForm]);

  return [form, onChange, reset];
};

export default useInputs;
