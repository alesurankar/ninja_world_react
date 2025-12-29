import { useState } from "react";
import { Login } from "../../../assets/images/images";
import { Signup } from "../../../assets/images/images";
import Button from "../../../utils/Button";
import Modal from "../../../utils/Modal";

interface AuthModalProps {
  onClose: () => void;
}

const AuthModal = ({ onClose }: AuthModalProps) => {
  const [mode, setMode] = useState<"login" | "signup">("login");
  return (
    <Modal onClose={onClose} maxWidth="max-w-4xl">
        {/* Modal box */}
        <div className="rounded-xl w-full max-w-4xl bg-white grid grid-cols-2 overflow-hidden">
          
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
          <div className="bg-[#4a5748] p-8 flex flex-col justify-center">
            {/* Content */}
            <div className="text-gray-800 font-semibold text-lg">
              <div className="mt-4 lg:text-2xl text-center">
                {mode === "login" ? (
                  <p>
                    <div>
                      <h2 className="text-black text-xl lg:text-4xl mb-8">LOG IN</h2>
                      <input type="text" placeholder="Username" className="w-full max-w-sm border rounded px-3 py-2 placeholder:text-sm lg:placeholder:text-lg"></input>
                    </div> 
                    <div className='flex justify-center mt-4 -mb-2'>
                      <Button
                        title='Log In'
                        mainClassName='bg-[#7c2923] hover:bg-[#d5453a]'
                        titleClassName='text-black'
                      />
                    </div>
                    <br/>
                    <span className="my-5">Don't have an account?</span>
                    <br/>
                    <div>
                      <p className="text-sm lg:text-lg text-gray-800 mt-1">
                        <input type="checkbox" required/> I agree to the
                        <a href="#" className="text-sm lg:text-lg text-[#0a9c38] hover:underline">Terms & Conditions</a>
                      </p>
                      
                    </div>
                    <button className="text-[#0a9c38] hover:underline mt-4" onClick={() => setMode("signup")}>Signup</button>
                  </p>    
                ) : (
                  <p>
                    <div>
                      <h2 className="text-black text-xl lg:text-4xl mb-8">SIGN UP</h2>
                      <input type="text" placeholder="Username" className="w-full max-w-sm border rounded px-3 py-2 placeholder:text-sm lg:placeholder:text-lg"></input>
                    </div>
                    <div className='flex justify-center mt-4 -mb-2'>
                      <Button
                        title='Sign Up'
                        mainClassName='bg-[#7c2923] hover:bg-[#d5453a]'
                        titleClassName='text-black'
                      />
                    </div>
                    <br/>
                    <span className="">Already have an account?</span>
                    <br/>
                    <button className="text-[#0a9c38] hover:underline mt-4" onClick={() => setMode("login")}>Login</button>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
    </Modal>
  );
};

export default AuthModal;
