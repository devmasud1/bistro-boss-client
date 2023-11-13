import { useEffect, useState } from "react";
import loginImg from "../../assets/others/login.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";

const LogIn = () => {
    const [disabled, setDisabled] = useState(true);
    const [captchaValue, setCaptchaValue] = useState("");

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogIn = (e) => {
    e.preventDefault();

    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;
    
    console.log(email, password);
  };

  const handleCaptchaChange = (e) => {
    const user_captcha_value = e.target.value;
    setCaptchaValue(user_captcha_value);
  
    // Enable the login button if the captcha is valid
    setDisabled(!validateCaptcha(user_captcha_value));
  };
  

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
       
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <p className="py-6">
              <img src={loginImg} alt="" />
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogIn} className="card-body">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">
                Login now!
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered normal-case"
                  required
                  
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered "
                  required
                />
                {/* <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label> */}
              </div>

              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate reloadText="refresh"/>
                </label>
                <input
                  type="text"
                  defaultValue={captchaValue}
                  onBlur={handleCaptchaChange}
                  placeholder="type captcha here...."
                  className="input input-bordered normal-case"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <input
                disabled={disabled}
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LogIn;
