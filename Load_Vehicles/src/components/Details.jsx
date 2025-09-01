import { InputBox, NextButton, Date } from "../components/InputBox";
import { useFormik } from "formik";
import * as Yup from "yup";

const Details = ({ Next, Back }) => {
  const today = new window.Date().toISOString().split("T")[0];

  const formik = useFormik({
    initialValues: {
      email: "",
      fullname: "",
      gender: "",
      dob: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      fullname: Yup.string()
        .matches(/^[A-Za-z]+$/, "Only letters & numbers allowed")
        .required("Fullname is required"),
      gender: Yup.string()
        .matches(/^[A-Za-z]+$/, "Only letters & numbers allowed")
        .required("Gender is required"),
      dob: Yup.string()
        .required("Date of Birth is required"),
    }),
    onSubmit: () => {
      Next();
    },
  });

  return (
    <div className="flex justify-center bg-[#7b7b7b] items-center min-h-screen">
      <div className="flex pr-15 w-45 mt-125">
        <NextButton label="&larr; Back" onClick={Back} />
      </div>

      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col gap-3 border border-white p-10 rounded-md"
      >

        <InputBox
          placeholder="Enter Your Email"
          {...formik.getFieldProps("email")}
        />
        {formik.touched.email && formik.errors.email && (
          <div className="text-red-500 text-sm">{formik.errors.email}</div>
        )}


        <InputBox
          placeholder="Enter Your Fullname"
          {...formik.getFieldProps("fullname")}
        />
        {formik.touched.fullname && formik.errors.fullname && (
          <div className="text-red-500 text-sm">{formik.errors.fullname}</div>
        )}


        <select
          name="gender"
          {...formik.getFieldProps("gender")}
          className="w-55 p-4 border border-white bg-white rounded-md text-gray-500 focus:outline-none px-3"
        >
          <option value="" disabled>
            Select Gender
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        {formik.touched.gender && formik.errors.gender && (
          <div className="text-red-500 text-sm">{formik.errors.gender}</div>
        )}


        <div>
          <h1 className="text-white font-semibold">Date of Birth:</h1>

          <div className="flex items-center justify-center flex-row  mt-2">
            <Date

              {...formik.getFieldProps("dob")}
              max={today}
            />
            {formik.touched.dob && formik.errors.dob && (
              <div className="text-red-500 text-sm">{formik.errors.dob}</div>
            )}

          </div>
        </div>

        <div className="flex w-55">
          <NextButton label="Submit" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Details;
