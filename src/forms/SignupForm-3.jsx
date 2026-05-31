import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "./Forms.css";

// Assignment 5 — Signup route.
// This form practices multiple controlled inputs and validation.
// No account is created yet.
function SignupForm() {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPasword] = useState("");

  const [confirm, setConfirm] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name.trim()) {
      toast.error("Please enter your name.");
      return;
    }

    if (!email.includes("@")) {
      toast.error("Please enter a valid email.");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters.");
      return;
    }

    if (password !== confirm) {
      toast.error("Passwords do not match.");
      return;
    }

    toast.success(`Welcome to PlateScout, ${name}!`);
    navigate("/");
  };

  return (
    <form className="Form" onSubmit={handleSubmit}>
      <h2>Sign up</h2>

      <input
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPasword(e.target.value)}
      />

      <input
        type="password"
        placeholder="Confirm password"
        value={confirm}
        onChange={e => setConfirm(e.target.value)}
      />

      <button type="submit">Sign up</button>

      <p className="Form-link">
        Already a member? <Link to="/login">Log in</Link>
      </p>
    </form>
  );
}

export default SignupForm;
