import { Navigate, Route, Routes } from "react-router-dom";
import NoInternet from "../errors/NoInternet";

const ErrorRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/no-internet" element={<NoInternet />} />
      <Route path="/token-expire" element={<NoInternet />} />
      <Route path="*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
export default ErrorRoutes;
