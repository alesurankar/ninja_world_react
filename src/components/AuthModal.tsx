import { useState } from "react";
import { Login } from "../assets/images/images";
import { Signup } from "../assets/images/images";

interface Props {
  onClose: () => void;
}

const AuthModal = ({ onClose }: Props) => {
  const [mode, setMode] = useState<"login" | "signup">("login");
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      {/* Modal box */}
      <div className="rounded-xl w-full max-w-4xl h-96 bg-white grid grid-cols-2 overflow-hidden">
        
        {/* LEFT PANEL */}
        <div className="bg-cover bg-center bg-no-repeat w-full h-full p-8 flex flex-col justify-between" style={{backgroundImage: `url(${mode === "login" ? Login : Signup})`}}>
          
          {/* Content */}
          <div className="text-white font-bold text-xl">
            {mode === "login" ? (
              <p className="mt-4 text-center">To enter the Ninja world, please log in</p>
            ) : (
              <p className="mt-4 text-center">To become a part of the Ninja world, please sign up</p>
            )}
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="relative bg-green-200 p-8 flex flex-col justify-center">
          {/* Close button */}
          <button className="absolute top-1 right-3 text-2xl text-gray-600 hover:text-black font-bold" onClick={onClose}>
            ✕
          </button>
          {/* Content */}
          <div className="text-gray-800 font-semibold text-lg">
            <div className="mt-4 text-xl text-center">
              {mode === "login" ? (
                <p>
                  <div>
                    <input type="text" placeholder="Username"></input>
                  </div>
                  <button className="text-blueColor mt-4 mb-4" type="submit">Submit</button>
                  <br/>
                  <span className="my-5">Don't have an account?</span>
                  <br/>
                  <div>
                    <p className="text-sm text-gray-800 mt-1">
                      <input type="checkbox" required/> I agree to the
                      <a href="#" className="text-sm text-blueColor underline hover:text-black">Terms & Conditions</a>
                    </p>
                    
                  </div>
                  <button className="text-red-800 mt-4" onClick={() => setMode("signup")}>Signup</button>
                </p>    
              ) : (
                <p>
                  <div>
                    <input type="text" placeholder="Username"></input>
                  </div>
                  <button className="text-blueColor mt-4 mb-4" type="submit">Submit</button>
                  <br/>
                  <span className="my-5">Already have an account?</span>
                  <br/>
                  <button className="text-red-800 mt-4" onClick={() => setMode("login")}>Login</button>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
