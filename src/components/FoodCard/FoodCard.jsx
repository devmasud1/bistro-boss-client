import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import useCart from "../../hooks/useCart";

const FoodCard = ({ cartItem }) => {
  const { _id, name, image, price, recipe } = cartItem || {};
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();
  const axiosUrl = useAxios();
  const [refetch] = useCart();

  const handleAddToCart = () => {
    if (user && user.email) {
      const addCartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };

      axiosUrl
        .post("/carts", addCartItem)
        .then((res) => {
          if (res.data.insertedId) {
            refetch();
            toast(`${name} has been added`, {
              position: "top-right",
              autoClose: 1000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          }
        })
        .catch(() => {
          toast.error("something wrong", {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        });
    } else {
      Swal.fire({
        title: "You are not log in?",
        text: "If you want to add any item please login!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Log in",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="image" />
      </figure>
      <p className="absolute top-5 right-5 w-16 bg-slate-700 text-stone-200 p-2 rounded-tl-lg">
        ${price}
      </p>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button
            onClick={handleAddToCart}
            className="btn btn-outline border-0 border-b-2 mt-4"
          >
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default FoodCard;
