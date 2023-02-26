import React from "react";
import { useForm } from "react-hook-form";
import InputHook from "../input/InputHook";
import RadioHook from "../radio/RadioHook";

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
      <div className="flex flex-col gap-3 mb-5">
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
      <div className="flex flex-col gap-3 mb-5">
        <label htmlFor="email" className="cursor-pointer">
          Email
        </label>
        <InputHook
          type="email"
          name="email"
          placeholder="Enter your email"
          id="email"
          control={control}
        ></InputHook>
      </div>
      <div className="flex flex-col gap-3 mb-5">
        <label htmlFor="password" className="cursor-pointer">
          Password
        </label>
        <InputHook
          type="password"
          name="password"
          placeholder="Enter your password"
          id="password"
          control={control}
        ></InputHook>
      </div>
      <div className="flex flex-col gap-3 mb-5">
        <label className="cursor-pointer">Gender</label>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-x-3">
            <RadioHook control={control} name="gender" value="male"></RadioHook>
            <span>Male</span>
          </div>
          <div className="flex items-center gap-x-3">
            <RadioHook
              control={control}
              name="gender"
              value="female"
            ></RadioHook>
            <span>Female</span>
          </div>
        </div>
      </div>
      <button className="w-full bg-blue-500 rounded-lg p-5 mt-5 font-semibold text-white">
        Submit
      </button>
    </form>
  );
};

export default RegisterHook;
