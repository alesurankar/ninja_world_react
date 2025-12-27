import { useState } from "react";
import API from "../api/auth";

const AuthForm = () => {
  const [mode, setMode] = useState<"login" | "signup">("login"); // the type is restricted to "login" or "signup", defaulting to "login".
  const [username, setUsername] = useState(""); // state to hold the username input
  const [error, setError] = useState<string | null>(null); // state to hold error messages
  const [loading, setLoading] = useState(false); // state to indicate loading status

  const handleSubmit = async (e: React.FormEvent) => { // function to handle form submission
    e.preventDefault(); // prevent default form submission behavior
    setError(null); // reset any previous errors
    setLoading(true); // set loading state to true

    try {  
      if (mode === "login") {
        await API.login(username);
      } else {
        await API.signup(username);
      }

      console.log("Success!");
      // navigate("/home") later
    } catch (err: any) { // catch any errors
      setError(err.message); // set the error message
    } finally { // finally block to execute after try/catch
      setLoading(false); // set loading state to false
    }
  };

  return ( 
    <div className={`form-box ${mode}`}> 

    {/* Form Container with dynamic class based on mode */}
      <div className="form-details">
        <h2>{mode === "login" ? "Welcome Back" : "Create Account"}</h2>
        <p>
          {mode === "login"
            ? "To enter the Ninja world, please log in"
            : "To become a part of the Ninja world, please sign up"}
        </p>
      </div>

      <div className="form-content">
        <h2>{mode === "login" ? "LOGIN" : "SIGN UP"}</h2>

        <form onSubmit={handleSubmit}>
          <div className="input-field">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <label>Username</label>
          </div>

          {mode === "signup" && (
            <div className="policy-text">
              <input type="checkbox" required />
              <label>
                I agree to the <a href="#">Terms & Conditions</a>
              </label>
            </div>
          )}

          <button type="submit" disabled={loading}>
            {loading ? "Loading..." : mode === "login" ? "Log In" : "Sign Up"}
          </button>
        </form>

        {error && <p className="error">{error}</p>}

        <div className="bottom-link">
          {mode === "login" ? (
            <>
              Don't have an account?{" "}
              <a onClick={() => setMode("signup")}>Signup</a>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <a onClick={() => setMode("login")}>Login</a>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
