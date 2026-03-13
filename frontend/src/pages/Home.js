import React, { useState } from "react";
import Login from "../components/Register";
import Register from "../components/Register";
import "../styles.css";

export default function Home() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="container">
      <div className="card">
        <h2>Anything.ai Task</h2>

        {isLogin ? <Login /> : <Register />}

        <p className="toggle">
          {isLogin ? "New user?" : "Already have account?"}
          <button onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Register" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
}