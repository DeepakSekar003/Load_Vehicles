import { DriverFileuplod, NextButton, Date } from "../components/InputBox";
import { useFormik } from "formik";
import * as Yup from "yup";

const Vehicles = ({ Next, Back }) => {
  const today = new window.Date().toISOString().split("T")[0];

  const formik = useFormik({
    initialValues: {
      vehicleDate: "",
    },
    validationSchema: Yup.object({
      vehicleDate: Yup.string().required("Vehicle date is required"),
    }),
    onSubmit: (values) => {
      localStorage.setItem("vehicles", JSON.stringify(values));
      Next();
    },
  });

  return (
    <div className="bg-[#7b7b7b] min-h-screen text-white">
      <div className="flex flex-row items-center justify-center pt-30 gap-4 ">
        <DriverFileuplod label="Uplod Your RC Book" />
        <DriverFileuplod label="Uplod Your Insurence" />
      </div>

      <div className="flex mr-85 items-center justify-center mt-4">
        <h1>Vehicle Model :</h1>
      </div>

      <div className="flex items-center justify-center flex-row ml-2 mt-2">
        <Date
          {...formik.getFieldProps("vehicleDate")}
          max={today}
        />

        {formik.touched.vehicleDate && formik.errors.vehicleDate ? (
          <div className="text-red-500 ml-3 ">{formik.errors.vehicleDate}</div>
        ) : null}

        <div className="flex ml-4 w-55">
          <NextButton label="Next &rarr;" onClick={formik.handleSubmit} />
        </div>
      </div>

      <div className="flex w-25 ml-[5%]">
        <NextButton label="&larr; Back" onClick={Back} />
      </div>
    </div>
  );
};

export default Vehicles;
