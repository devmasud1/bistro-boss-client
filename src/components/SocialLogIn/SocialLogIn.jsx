import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { FaGooglePlusG } from "react-icons/fa6";
import toast from "react-hot-toast";
import useAxiosPublic from "../../hooks/useAxiosPublic";


const SocialLogIn = () => {
  const { googleSignIn } = useAuth();
  const axiosPublicUrl = useAxiosPublic();

  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    const loadingToast = toast.loading("Logging...");
    googleSignIn()
      .then((result) => {

        const userInfo = {
           name : result.user.displayName,
           email: result.user.email

        }

        axiosPublicUrl
          .post("/users", userInfo)
          .then(() => {
            toast.success("Login successful", { id: loadingToast });
            navigate(from, { replace: true });
          })
          .catch((err) => {
            toast.dismiss(loadingToast);
            toast.error("something wrong!", err.message);
          });
      })
      .catch((err) => {
        toast.error("something wrong!", err.message);
      });
  };
  return (
    <div className="text-center">
      <h2>Or sign in with</h2>
      <Link>
        <button onClick={handleGoogleSignIn}>
          <FaGooglePlusG className="w-20 h-10 py-1 rounded-full m-2   bg-blue-600 text-blue-100 shadow-lg" />
        </button>
      </Link>
    </div>
  );
};
export default SocialLogIn;
