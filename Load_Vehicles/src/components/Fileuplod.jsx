import { DriverFileuplod, NextButton, InputBox, Date } from "../components/InputBox";
import { useFormik } from "formik";
import * as Yup from "yup";
import React from "react";

const Filesuplod = ({ Next, Back }) => {
  const today = new window.Date().toISOString().split("T")[0];

  const formik = useFormik({
    initialValues: {
      DLnumber: "",
      DLvalidTill: "",
      PANnumber: "",
    },
    
    validationSchema: Yup.object({
      DLnumber: Yup.string()
        .required("DL Number is required")
        .matches(/^[A-Za-z0-9]+$/, "Only letters & numbers allowed"),
      DLvalidTill: Yup.string().required("DL valid date required"),
      PANnumber: Yup.string()
        .required("PAN Number is required")
        .matches(/^[A-Za-z0-9]+$/, "Only letters & numbers allowed"),
    }),
    onSubmit: (values) => {
      console.log("Form Values:", values);
      Next(); 
    },
  });

  return (
    <form className="bg-[#7b7b7b] min-h-screen text-white">
     
      <div className="flex justify-center items-center pt-10 flex-row gap-2">
        <DriverFileuplod label="Uplod your DL [Front]" />
        <DriverFileuplod label="Uplod your DL [Back]" />

        <div className="flex flex-col mt-8 ml-8 gap-3">
          <InputBox
            placeholder="Enter Your DL Number"
            name="DLnumber"
            value={formik.values.DLnumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.DLnumber && formik.errors.DLnumber && (
            <p className="text-red-500 text-sm">{formik.errors.DLnumber}</p>
          )}

          <div>
            <h1>DL Valid till :</h1>
            <Date
              name="DLvalidTill"
              value={formik.values.DLvalidTill}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              min={today}
            />
            {formik.touched.DLvalidTill && formik.errors.DLvalidTill && (
              <p className="text-red-500 text-sm">{formik.errors.DLvalidTill}</p>
            )}
          </div>
        </div>
      </div>

    
      <div className="flex justify-center items-center flex-row gap-2 mt-5">
        <DriverFileuplod label="Uplod your Pan [Front]" />
        <DriverFileuplod label="Uplod your Pan [Back]" />

        <div className="ml-8 mt-8">
          <InputBox
            placeholder="Enter Your Pan Number"
            name="PANnumber"
            value={formik.values.PANnumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.PANnumber && formik.errors.PANnumber && (
            <p className="text-red-500 text-sm">{formik.errors.PANnumber}</p>
          )}

     
          <div className="flex mt-7 w-55">
            <NextButton
              label="Next &rarr;" type="button" onClick={formik.handleSubmit} />
          </div>
        </div>
      </div>

    
      <div className="flex w-25 ml-[5%]">
        <NextButton label="&larr; Back" type="button" onClick={Back} />
      </div>
    </form>
  );
};

export default Filesuplod;
