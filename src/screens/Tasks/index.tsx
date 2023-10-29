import * as React from "react";
import NavBar from "../../components/NavBar";
import { useNavigate } from "react-router-dom";
import Main from "../../components/Main";

import { useAuth } from "../../provider/authProvider";
const Tasks = () => {
  const navigate = useNavigate();
  const { setToken } = useAuth();

  const logout = () => {
    setToken(null);
    navigate("/login", { replace: true });
  };

  return (
    <>
      <NavBar logout={logout} />
      <Main />
    </>
  );
};

export default Tasks;
