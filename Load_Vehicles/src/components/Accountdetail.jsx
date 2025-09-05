import { InputBox, NextButton } from "../components/InputBox";
import { useFormik } from "formik";
import * as Yup from "yup";

const Accountdetail = ({ Next, Back }) => {
  const formik = useFormik({
    initialValues: {
      bankName: "",
      branch: "",
      accountNumber: "",
      name: "",
      ifscCode: "",
    },
    validationSchema: Yup.object({
      bankName: Yup.string()
        .matches(/^[A-Za-z]+$/, "Only letters")
        .required("Bank Name is required"),
      branch: Yup.string()
        .required("Branch is required"),
      accountNumber: Yup.string()
        .matches(/^[0-9]+$/, "Account Number must be digits")
        .required("Account Number is required"),
      name: Yup.string()
        .matches(/^[A-Za-z]+$/, "Only letters")
        .required("Name is required"),
      ifscCode: Yup.string()
        .matches(/^[A-Za-z0-9]+$/, "Only letters & numbers allowed")
        .required("IFSC Code is required"),
    }),
    onSubmit: (values) => {
      localStorage.setItem("accountdetail", JSON.stringify(values));
      Next();
    },
  });

  return (
    <div className="bg-[#7b7b7b] flex min-h-screen items-center justify-center text-white">
      <div className="flex pr-15 w-45 mt-125">
        <NextButton label="&larr; Back" onClick={Back} />
      </div>

      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col p-12 rounded-md border gap-2"
      >
        <InputBox placeholder="Bank Name" {...formik.getFieldProps("bankName")} />
        {formik.touched.bankName && formik.errors.bankName && (
          <div className="text-red-500 text-sm">{formik.errors.bankName}</div>
        )}

        <InputBox placeholder="Branch" {...formik.getFieldProps("branch")} />
        {formik.touched.branch && formik.errors.branch && (
          <div className="text-red-500 text-sm">{formik.errors.branch}</div>
        )}

        <InputBox placeholder="Account Number" {...formik.getFieldProps("accountNumber")} />
        {formik.touched.accountNumber && formik.errors.accountNumber && (
          <div className="text-red-500 text-sm">{formik.errors.accountNumber}</div>
        )}

        <InputBox placeholder="Name" {...formik.getFieldProps("name")} />
        {formik.touched.name && formik.errors.name && (
          <div className="text-red-500 text-sm">{formik.errors.name}</div>
        )}

        <InputBox placeholder="Ifsc Code" {...formik.getFieldProps("ifscCode")} />
        {formik.touched.ifscCode && formik.errors.ifscCode && (
          <div className="text-red-500 text-sm">{formik.errors.ifscCode}</div>
        )}

        <div className="flex w-55">
          <NextButton label="Next &rarr;" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Accountdetail;
