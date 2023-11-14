import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import { useQuery, useMutation } from "@tanstack/react-query";

import { loginSchema } from "@/validationSchemas";
import { login, getAccount, getUS2 } from "@/apis";

import { Checkbox, TextField } from "@mui/material";
import MuiFormControlLabel from "@mui/material/FormControlLabel";
import { styled } from "@mui/material/styles";

import argusLogo from "@/assets/ArgusLogo.png";

const Login = () => {
  const LinkStyled = styled(Link)(({ theme }) => ({
    fontSize: "0.875rem",
    textDecoration: "none",
    color: theme.palette.primary.main,
  }));

  const FormControlLabel = styled(MuiFormControlLabel)(({ theme }) => ({
    "& .MuiFormControlLabel-label": {
      fontSize: "0.875rem",
      color: theme.palette.text.secondary,
    },
  }));

  const { data: accountData } = useQuery({
    queryKey: ["userAccount"],
    queryFn: () => getAccount(),
  });

  const { data: getUs2Data } = useQuery({
    queryKey: ["getUs2Data"],
    queryFn: () => getUS2(accountData?.data),
    enabled: !!accountData?.data,
  });

  const {
    mutateAsync: loginMutation,
    isLoading: loginLoading,
    error,
  } = useMutation({
    mutationFn: (payload) => login(payload),
  });

  return (
    <div>
      <div className="bg-black p-4">
        <img className="w-[10%]" src={argusLogo} />
      </div>

      <Formik
        initialValues={{
          email: "",
          password: "",
          rememberMe: false,
        }}
        validationSchema={loginSchema}
        onSubmit={async (values) => {
          const response = await loginMutation({
            email: values.email,
            password: values.password,
            accountDetails: accountData?.data,
            userDetails: getUs2Data?.data,
          });
        }}
      >
        {({ values, handleChange, errors, touched }) => (
          <Form>
            <div className="border w-[35%] m-auto mt-20 rounded-lg shadow-lg">
              <div className="bg-black px-5 py-3 rounded-t-lg">
                <span className="text-white">Login</span>
              </div>

              <div className="p-5 rounded-lg">
                <div className="flex flex-col gap-4">
                  <TextField
                    name="email"
                    size="small"
                    fullWidth
                    label="Email"
                    value={values.email}
                    onChange={handleChange}
                    error={touched.email && errors.email}
                    helperText={touched.email && errors.email}
                  />
                  <TextField
                    name="password"
                    size="small"
                    fullWidth
                    label="Password"
                    type="password"
                    value={values.password}
                    onChange={handleChange}
                    error={touched.password && errors.password}
                    helperText={touched.password && errors.password}
                  />
                </div>

                <div className="flex flex-col">
                  <div className="flex justify-between items-center mt-5">
                    <FormControlLabel
                      name="rememberMe"
                      label="Remember Me"
                      control={
                        <Checkbox
                          name="rememberMe"
                          checked={values.rememberMe}
                          onChange={handleChange}
                        />
                      }
                    />
                    <LinkStyled
                      sx={{ color: "#808080" }}
                      href="/pages/auth/forgot-password-v1"
                    >
                      Forgot Password?
                    </LinkStyled>
                  </div>

                  <div className="m-auto mt-4">
                    <button
                      type="submit"
                      className="bg-[#808080] text-white px-5 py-2 rounded-lg"
                    >
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
