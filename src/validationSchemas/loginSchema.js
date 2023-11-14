import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(5, "Must be at least 6 characters").required(),
  rememberMe: yup.boolean(),
});
