import axios from "axios";
import { encryptePWD } from "@/utils";

export const getAccount = () => {
  return axios.get(
    `${import.meta.env.VITE_PUBLIC_AuthURL}/MA.asmx/getAC?_accountName=byc`
  );
};

export const getUS2 = (params) => {
  return axios.get(
    `${import.meta.env.VITE_PUBLIC_BASE_URL}/SY.asmx/getUS2?_email=${
      params.email
    }`,
    {
      headers: {
        accountId: JSON.parse(params.accountDetails.record.accountId),
        dbe: JSON.parse(params.accountDetails.record.dbe),
        dbs: JSON.parse(params.accountDetails.record.dbs),
      },
    }
  );
};

export const login = (payload) => {
  encryptePWD(payload.password);

  const logInParams = `_email=${payload.email}&_password=${encryptePWD(
    payload.password
  )}&_accountId=${payload.accountDetails.record.accountId}&_userId=${
    payload.userDetails.record.recordId
  }`;

  return axios.get(
    `${import.meta.env.VITE_PUBLIC_AuthURL}/MA.asmx/signIn3?${logInParams}`,
    {
      tbUsername: payload.email,
      tbPassword: payload.password,
    },
    {
      headers: {
        accountId: JSON.parse(payload.accountDetails.record.accountId),
        dbe: JSON.parse(payload.accountDetails.record.dbe),
        dbs: JSON.parse(payload.accountDetails.record.dbs),
      },
    }
  );
};
