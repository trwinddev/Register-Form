import React from "react";
import InputFormik from "../input/InputFormik";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import RadioFormik from "../radio/RadioFormik";
import CheckboxFormik from "../checkbox/CheckboxFormik";
import DropdownFormik from "../dropdown/DropdownFormik";

const dropdownData = [
  {
    id: 1,
    value: "teacher",
    text: "Teacher",
  },
  {
    id: 2,
    value: "developer",
    text: "Developer",
  },
  {
    id: 3,
    value: "doctor",
    text: "Doctor",
  },
];

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
          // username: Yup.string().required("Please enter your username"),
          // email: Yup.string()
          //   .email("Please enter valid email address")
          //   .required("Please enter your email address"),
          // password: Yup.string()
          //   .min(8, "Your password must be at least 8 character")
          //   .matches(
          //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
          //     {
          //       message:
          //         "Your password at least 1 uppercase letter, 1 number,1 special character",
          //     }
          //   )
          //   .required("Please enter your password"),
          // gender: Yup.string()
          //   .required("Please select your gender")
          //   .oneOf(["male", "female"], "You can only select male or female"),
          job: Yup.string()
            .required("Please select your job")
            .oneOf(["teacher", "developer", "doctor"]),
          term: Yup.boolean().oneOf(
            [true],
            "Please check the term and conditions"
          ),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 2000);
        }}
      >
        {(formik) => {
          const genderWatch = formik.values.gender;
          return (
            <form
              onSubmit={formik.handleSubmit}
              className="max-w-[300px] mx-auto my-10"
              autoComplete="off"
            >
              <InputFormik
                type="text"
                label="Username"
                id="username"
                name="username"
                placeholder="Enter your user name"
              ></InputFormik>
              <InputFormik
                type="email"
                label="Email address"
                id="email"
                name="email"
                placeholder="Enter your email address"
              ></InputFormik>
              <InputFormik
                type="password"
                label="Password"
                id="password"
                name="password"
                placeholder="Enter your password"
              ></InputFormik>
              <div className="flex flex-col gap-3 mb-5">
                <label className="cursor-pointer">Gender</label>
                <div className="flex items-center gap-5">
                  <RadioFormik
                    name="gender"
                    value="male"
                    checked={genderWatch === "male"}
                    label="Male"
                  ></RadioFormik>
                  <RadioFormik
                    name="gender"
                    value="female"
                    checked={genderWatch === "female"}
                    label="Female"
                  ></RadioFormik>
                </div>
              </div>
              <DropdownFormik
                labelText="Your job"
                data={dropdownData}
                name="job"
                setValue={formik.setFieldValue}
              ></DropdownFormik>
              <CheckboxFormik name="term">
                I accept the terms and conditions
              </CheckboxFormik>
              <button
                type="submit"
                disabled={formik.isSubmitting}
                className="w-full bg-blue-500 rounded-lg p-5 mt-5 font-semibold text-white "
              >
                {formik.isSubmitting ? (
                  <div className="h-5 w-5 rounded-full border-4 border-t-4 border-white border-t-transparent animate-spin mx-auto"></div>
                ) : (
                  "Submit"
                )}
              </button>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default RegisterFormik;
