import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import PrivateRoute from "./components/PrivateRouter";
import DashboardHome from "./components/dashCompo/DashBoardHome";
import Dashboard from "./components/dashCompo/Dashboard";
import Account from "./components/dashCompo/Account";
import Expenses from "./components/dashCompo/Expenses";
import ExpensesTracking from "./components/ExpensesTracking";
import Reports from "./components/dashCompo/Reports";
import Income from "./components/dashCompo/Income";
import Profile from "./components/dashCompo/Profile";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/sign-in" element={<SignIn />} />
        <Route exact path="/sign-up" element={<SignUp />} />
        <Route element={<PrivateRoute />}>
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/account" element={<Account />} />
          <Route exact path="/expenses" element={<Expenses />} />
          <Route
            exact
            path="/expenses-tracking"
            element={<ExpensesTracking />}
          />
          <Route exact path="/reports" element={<Reports />} />
          <Route exact path="/income" element={<Income />} />
          <Route exact path="/dashboard" element={<DashboardHome />} />
          <Route exact path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
