import React from "react";
import InputFormik from "../input/InputFormik";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const RegisterFormik = () => {
  return (
    <div>
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
          gender: "male",
          job: "",
          term: false,
        }}
        validationSchema={Yup.object({
          username: Yup.string().required("Please enter your username"),
          email: Yup.string()
            .email("Please enter valid email address")
            .required("Please enter your email address"),
          password: Yup.string()
            .min(8, "Your password must be at least 8 character")
            .matches(
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
              {
                message:
                  "Your password at least 1 uppercase letter, 1 number,1 special character",
              }
            )
            .required("Please enter your username"),
          gender: Yup.string()
            .required("Please select your gender")
            .oneOf(["male", "female"], "You can only select male or female"),
          job: Yup.string()
            .required("Please select your job")
            .oneOf(["teacher", "developer", "doctor"]),
          term: Yup.boolean().required("Please check the term"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 2000);
        }}
      >
        {(formik) => (
          <form
            onSubmit={formik.handleSubmit}
            className="max-w-[300px] mx-auto my-10"
            autoComplete="off"
          >
            <div className="flex flex-col gap-3 mb-5">
              <label htmlFor="username" className="cursor-pointer">
                Username
              </label>
              <InputFormik></InputFormik>
              <p className="text-sm text-red-500">Error</p>
            </div>
            <button className="w-full bg-blue-500 rounded-lg p-5 mt-5 font-semibold text-white ">
              {formik.isSubmitting ? (
                <div className="h-5 w-5 rounded-full border-4 border-t-4 border-white border-t-transparent animate-spin mx-auto"></div>
              ) : (
                "Submit"
              )}
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterFormik;
