import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

export const loginRules = yupResolver(
  Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
  }).required()
);
