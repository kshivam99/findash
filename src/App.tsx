import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Dashboard } from "./pages/Dashboard";
import Login from "./pages/Login";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="App">
      {isAuthenticated ? (
        <>
          <Navbar setIsAuthenticated={setIsAuthenticated} />
          <Dashboard />
        </>
      ) : (
        <Login setIsAuthenticated={setIsAuthenticated} />
      )}
    </div>
  );
}

export default App;
