import { clientPath } from "../../config/Keys";

export const InternetStatus = () => {
  //watch when internet goes off
  window.addEventListener("offline", () => {
    const path = clientPath + "/error/no-internet";
    window.location.href = path;
  });
  //watch when internet restore
  window.addEventListener("online", () => {
    window.history.back();
  });
};
