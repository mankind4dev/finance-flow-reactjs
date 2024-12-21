import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

export default function PrivateRoute() {
  const { mainUser } = useSelector((state) => state.finance);
  return mainUser ? <Outlet /> : <Navigate to="/sign-in" />;
}
