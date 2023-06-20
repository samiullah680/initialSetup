import { Navigate, Route, Routes } from "react-router-dom";
import { Activate, Forget, Login, ResetPassHelper, Signup } from "../auth";
import NewPassword from "../auth/NewPassword";

const AuthRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<Forget />} />
      <Route path="/reset-helper" element={<ResetPassHelper />} />
      <Route path="/reset-password" element={<NewPassword />} />
      <Route path="/activate" element={<Activate />} />
      <Route path="*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
export default AuthRoutes;
