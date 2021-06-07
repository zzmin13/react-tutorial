import React, { useCallback, useState } from "react";

const useInputs = (initialForm) => {
  const [form, setForm] = useState(initialForm);
  const onChange = useCallback((event) => {
    const { name, value } = event.target;
    setForm((form) => ({ ...form, [name]: value }));
  }, []);
  const reset = useCallback(() => {
    setForm(initialForm);
  }, [initialForm]);

  return [form, onChange, reset];
};

export default useInputs;
