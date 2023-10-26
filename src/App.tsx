import React, { ReactNode } from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./screens/Login";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./provider/authProvider";
import Routes from './routes';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </div>
  );
}

export default App;
