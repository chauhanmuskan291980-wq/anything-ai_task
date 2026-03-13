import { useState } from "react";
import API from "./api";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  const register = async () => {
    await API.post("/register", { email, password });
    alert("Registered Successfully");
  };

  const login = async () => {
    const res = await API.post("/login", { email, password });
    setToken(res.data.access_token);
    localStorage.setItem("token", res.data.access_token);
    alert("Login Successful");
  };

  const getTasks = async () => {
  const token = localStorage.getItem("token");

  const res = await API.get("/tasks", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  console.log(res.data);
};

  return (
    <div style={{ padding: 40 }}>
      <h2>Anything.ai Task</h2>

      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br /><br />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br /><br />

      <button onClick={register}>Register</button>
      <button onClick={login}>Login</button>
      <button onClick={getTasks}>Get Tasks</button>

      {token && <p>Logged In ✔</p>}
    </div>
  );
}

export default App;