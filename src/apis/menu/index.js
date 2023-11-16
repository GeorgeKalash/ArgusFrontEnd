import axios from "axios";

const userData = JSON.parse(localStorage.getItem("userData"));

export const getMenuItems = () => {
  return axios.get(
    `${import.meta.env.VITE_PUBLIC_BASE_URL}/SY.asmx/mainMenu?_filter=`,
    {
      headers: {
        Authorization: "Bearer " + userData.accessToken,
        "Content-Type": "multipart/form-data",
        LanguageId: userData.languageId,
      },
    }
  );
};
