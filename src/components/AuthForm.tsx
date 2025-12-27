import { useState } from "react";
import API from "../api/auth";
import { Login } from "../assets/images/images";
import { Signup } from "../assets/images/images";

type AuthFormProps = {
  className?: string
};

const AuthForm = ({ className = "" }: AuthFormProps) => {
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
    <div className="bg-cover bg-center bg-no-repeat w-full h-full" style={{backgroundImage: `url(${mode === "login" ? Login : Signup})`,}}>

        {/* Form Container with dynamic class based on mode */}
        <div className="form-details">
            <h2 className="text-2xl font-bold mb-2">
                {mode === "login" ? "Welcome Back" : "Create Account"}
            </h2>
            <p className="text-sm text-gray-600 mb-6">
            {mode === "login"
                ? "To enter the Ninja world, please log in"
                : "To become a part of the Ninja world, please sign up"}
            </p>
      </div>

      <div className="form-content flex flex-col">
        <h2 className="text-xl font-semibold mb-4">
            {mode === "login" ? "LOGIN" : "SIGN UP"}
        </h2>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="input-field">
            <input
              type="text"
              placeholder="Username"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <label>Username</label>
          </div>

          {mode === "signup" && (
            <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" required />
                I agree to the <a href="#" className="text-blue-500 underline">Terms & Conditions</a>
            </label>
          )}

          <button type="submit"
                className="bg-red-500 text-white py-2 rounded-md hover:bg-blue-600 disabled:bg-blue-300"
                disabled={loading}>
            {loading ? "Loading..." : mode === "login" ? "Log In" : "Sign Up"}
          </button>
        </form>

        {error && <p className="error">{error}</p>}

        <div className="mt-4 text-sm text-center">
          {mode === "login" ? (
            <>
                Don't have an account?{" "}<button onClick={() => setMode("signup")} className="text-blue-500 underline">Signup</button>
            </>
          ) : (
            <>
                Already have an account?{" "}<button onClick={() => setMode("login")} className="text-blue-500 underline">Login</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
