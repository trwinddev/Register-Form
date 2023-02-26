import React from "react";
import { useForm } from "react-hook-form";
import InputHook from "../input/InputHook";

const RegisterHook = () => {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();
  const onSubmitHandler = (values) => {
    console.log(values);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      className="max-w-[300px] mx-auto my-10"
      autoComplete="off"
    >
      <div className="flex flex-col gap-3">
        <label htmlFor="username" className="cursor-pointer">
          Username
        </label>
        <InputHook
          type="text"
          name="username"
          placeholder="Enter your username"
          id="username"
          control={control}
        ></InputHook>
        <p className="text-red-500 text-sm">Please enter your name</p>
      </div>
      <button className="w-full bg-blue-500 rounded-lg p-5 mt-5 font-semibold text-white">
        Submit
      </button>
    </form>
  );
};

export default RegisterHook;
