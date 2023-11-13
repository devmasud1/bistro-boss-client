import { Link } from "react-router-dom";
import signUpImg from "../../assets/others/login.png";
import { useContext } from "react";
import { AuthContext } from "../../hooks/provide/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    const loadingToast = "loading.....";

    createUser(email, password, name)
      .then(() => {
        toast.success("successfully created account", { id: loadingToast });
        form.reset();
      })
      .catch(() => {
        toast.dismiss(loadingToast);
        toast.error("something wrong");
        form.reset();
      });
  };
  return (
    <div>
      <Toaster />
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <p className="py-6">
              <img src={signUpImg} alt="" />
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignUp} className="card-body">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">
                Sign Up!
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="your name"
                  className="input input-bordered normal-case"
                  required
                />
              </div>
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

              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="SignUp"
                />
              </div>
              <p>
                Already registered? <Link to="/login"> Go to log in</Link>{" "}
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
