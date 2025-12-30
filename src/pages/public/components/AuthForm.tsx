import { useState } from "react";
import { Login } from "../../../assets/images/images";
import { Signup } from "../../../assets/images/images";
import Button from "../../../utils/Button";
interface AuthFormProps {
  onSuccess: () => void;
}

const AuthForm = ({ onSuccess }: AuthFormProps) => {
  const [mode, setMode] = useState<"login" | "signup">("login");

  return (
    <div className="rounded-xl w-full max-w-4xl bg-white grid grid-cols-1 lg:grid-cols-2">
      {/* LEFT PANEL */}
      <div className="bg-cover bg-center p-4 bg-no-repeat" style={{backgroundImage: `url(${mode === "login" ? Login : Signup})`}}>
        {/* Content */}
        <div className="text-white font-bold text-xl">
          {mode === "login" ? (
            <p className="mt-4 text-center text-[#4a5748]">To enter the Ninja world, please log in</p>
          ) : (
            <p className="mt-4 text-center text-[#4a5748]">To become a part of the Ninja world, please sign up</p>
          )}
        </div>
      </div>
      {/* RIGHT PANEL */}
      <div className="bg-[#4a5748] py-6 lg:py-12 px-10 lg:px-12">
        {/* Content */}
        <div className="text-gray-800 font-semibold text-lg lg:text-xl text-center">
          {mode === "login" ? (
            <p>
              <form>
                <h2 className="text-black text-xl lg:text-4xl mb-4 lg:mb-8">LOG IN</h2>
                <input 
                  type="text" 
                  placeholder="User" 
                  className="w-full max-w-sm border rounded px-2 lg:px-3 py-0 lg:py-2 placeholder:text-sm lg:placeholder:text-lg"></input>
                <input 
                  type="password" 
                  placeholder="Password" 
                  className="w-full max-w-sm border rounded px-2 lg:px-3 py-0 lg:py-2 placeholder:text-sm lg:placeholder:text-lg"></input>
              </form>
              <div className='flex justify-center mt-4 -mb-2'>
                <Button
                      title='Log In'
                      mainClassName='bg-[#7c2923] hover:bg-[#d5453a]'
                      titleClassName='text-black'
                    />
              </div>
              <div className="mt-6 text-center space-y-2">
                <span>Don't have an account?</span>
                <form>
                  <p className="text-sm lg:text-lg text-gray-800 mt-1">
                    <input type="checkbox" required/> I agree to the
                    <a href="#" className="text-sm lg:text-lg text-[#0a9c38] hover:underline">Terms & Conditions</a>
                  </p> 
                </form>
                <button className="text-[#0a9c38] hover:underline mt-4" onClick={() => setMode("signup")}>Signup</button>
              </div>
            </p>
          ) : (
            <p>
              <form>
                <h2 className="text-black text-xl lg:text-4xl mb-4 lg:mb-8">SIGN UP</h2>
                <input
                  type="text"
                  name="username"
                  required
                  autoComplete="username"
                  placeholder="Username"
                  className="w-full max-w-sm border rounded px-2 lg:px-3 py-0 lg:py-2 placeholder:text-sm lg:placeholder:text-lg"></input>
                <input 
                  type="email" 
                  name="email"
                  required
                  autoComplete="email" 
                  placeholder="E-mail" 
                  className="w-full max-w-sm border rounded px-2 lg:px-3 py-0 lg:py-2 placeholder:text-sm lg:placeholder:text-lg"></input>
                <input 
                  type="password"
                  name="password"
                  required 
                  autoComplete="new-password"
                  placeholder="Password" 
                  className="w-full max-w-sm border rounded px-2 lg:px-3 py-0 lg:py-2 placeholder:text-sm lg:placeholder:text-lg"></input>
              </form>
              <div className='flex justify-center mt-4 -mb-2'>
                <Button
                  title='Sign Up'
                  mainClassName='bg-[#7c2923] hover:bg-[#d5453a]'
                  titleClassName='text-black'
                />
              </div>
              <div className="mt-6 text-center space-y-2">
                <span>Already have an account?</span>
                <button className="text-[#0a9c38] hover:underline mt-4" onClick={() => setMode("login")}>Login</button>
              </div>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthForm;