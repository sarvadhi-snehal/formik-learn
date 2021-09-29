import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";
const FormComponents = () => {
  const dropDownOptions = [
    { key: "Select an option", value: "" },
    { key: "OPtion 1", value: "option1" },
    { key: "OPtion 2", value: "option2" },
    { key: "OPtion 2", value: "option3" },
  ];

  const radioOptions = [
    { key: "OPTION", value: "option" },
    { key: "OPTION2", value: "option2" },
  ];
  const initialValues = {
    email: "",
    about: "",
    selectOption: "",
    radioOptions: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("Required"),
    about: Yup.string().required("Required"),
    selectOption: Yup.string().required("Required"),
    radioOptions: Yup.string().required("Required"),
  });
  const onSubmit = (values) => console.log(JSON.stringify(values));
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => {
        console.log(formik.values);
        return (
          <Form>
            <FormikControl
              control="input"
              type="email"
              name="email"
              label="Email"
            />
            <FormikControl name="about" control="textarea" label="About" />
            <FormikControl
              name="selectOption"
              control="select"
              label="Select"
              options={dropDownOptions}
            />
            <FormikControl name="radio" />
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormComponents;
