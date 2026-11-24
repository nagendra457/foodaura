
import { useState } from "react";
import "./Login.css";

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    setMessage(
      isLogin
        ? "Login form submitted successfully!"
        : "Account created successfully!"
    );
  }

  return (
    <section className="login-section">
      <div className="login-card">
        <div className="login-brand">
          <h1>Foodora<span>.</span></h1>
          <p>Good Food. Great Moments.</p>
        </div>

        <div className="login-heading">
          <h2>{isLogin ? "Welcome Back!" : "Create Account"}</h2>
          <p>
            {isLogin
              ? "Login to continue your food journey."
              : "Join Foodora and enjoy delicious food."}
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
          />

          <div className="password-field">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              minLength={6}
              required
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <button type="submit" className="login-submit">
            {isLogin ? "Login" : "Create Account"}
          </button>
        </form>

        {message && <p className="login-message">{message}</p>}

        <div className="login-switch">
          {isLogin ? "Don't have an account?" : "Already have an account?"}

          <button
            onClick={() => {
              setIsLogin(!isLogin);
              setMessage("");
              setForm({ name: "", email: "", password: "" });
            }}
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Login;
