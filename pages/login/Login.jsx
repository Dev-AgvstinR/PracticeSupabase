import "./login.css";
import { AiFillThunderbolt } from "react-icons/ai";
import { TextField, Button } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

export const Login = () => {
  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: { email: "", password: "", Confirmpassword: "" },
    onSubmit: (data) => {
      console.log(data);
    },
    validationSchema: Yup.object({
      email: Yup.string().required(),
      password: Yup.string()
        .required("La contraseña es obligatoria")
        .min(8, "Debe tener al menos 8 caracteres")
        .matches(/[A-Z]/, "Debe contener al menos una mayúscula")
        .matches(/[a-z]/, "Debe contener al menos una minúscula")
        .matches(/[0-9]/, "Debe contener al menos un número")
        .matches(
          /[!@#$%^&*(),.?":{}|<>]/,
          "Debe contener un carácter especial",
        ),
      Confirmpassword: Yup.string()
        .required()
        .oneOf([Yup.ref("contraseña")]),
    }),
    validateOnChange: false,
  });

  return (
    <div className="Container">
      <div className="container-modal">
        <div className="container-modal-top">
          <AiFillThunderbolt color="fff" size="50" className="icon" />
          <h2>Karga</h2>
          <p>Registrate en Karga</p>
        </div>
        <div>
          <form className="container-modal-inputs" onSubmit={handleSubmit}>
            <TextField
              label="Email"
              name="email"
              variant="standard"
              className="inputsText"
              type="email"
              onChange={handleChange}
              error={errors.email ? true : false}
              helperText={errors.email ? "Este campo es requerido" : ""}
            />

            <TextField
              name="password"
              label="Password"
              variant="standard"
              className="inputsText"
              type="password"
              onChange={handleChange}
              error={errors.password ? true : false}
              helperText={errors.password ? errors.password : ""}
            />
            <TextField
              name="Confirmpassword"
              label="Confirm Password"
              variant="standard"
              className="inputsText"
              type="password"
              onChange={handleChange}
              error={errors.Confirmpassword ? true : false}
              helperText={errors.Confirmpassword ? errors.Confirmpassword : ""}
            />
            <Button variant="contained" type="sumbit">
              Registrar
            </Button>
          </form>
        </div>
        <div className="container-modal-bottom"></div>
      </div>
    </div>
  );
};
