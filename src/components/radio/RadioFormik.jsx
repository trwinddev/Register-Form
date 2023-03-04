import { useField } from "formik";
import React from "react";

const RadioFormik = (props) => {
  const [field] = useField(props);
  return (
    <label className="cursor-pointer custom-radio">
      <input
        type="radio"
        {...field}
        value={props.value}
        className="hidden"
        checked={props.checked}
      />
      <div className="bg-white w-full h-full rounded-full"></div>
    </label>
  );
};

export default RadioFormik;
