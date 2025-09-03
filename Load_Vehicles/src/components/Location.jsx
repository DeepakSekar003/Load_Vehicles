import { NextButton } from "../components/InputBox";
import { useFormik } from "formik";
import * as Yup from "yup";
import React from "react";
import Searchinput from "../components/inputPD"; 

const Location = ({ Next, Back }) => {
  const formik = useFormik({
    initialValues: { location: "" },
    validationSchema: Yup.object({
      location: Yup.string().required("Location is required"),
    }),
    onSubmit: (values) => {
      localStorage.setItem("location", JSON.stringify(values));
      Next();
    },
  });

  return (
    <div className="flex flex-col justify-center items-center bg-[#7b7b7b] min-h-screen text-white">
      <form onSubmit={formik.handleSubmit} className="border p-8 rounded-md">
        <h1 className="text-3xl mb-2 font-semibold">Location</h1>

        <Searchinput
          text="Enter the location"
          value={formik.values.location}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="location"
        />

        {formik.touched.location && formik.errors.location && (
          <p className="text-red-500 text-sm mt-1">{formik.errors.location}</p>
        )}

        <div className="flex w-25 mt-3">
          <NextButton label="Next &rarr;" type="submit" />
        </div>
      </form>

      <div className="flex w-25 mr-[80%] -mb-6">
        <NextButton label="&larr; Back" onClick={Back} />
      </div>
    </div>
  );
};

export default Location;
