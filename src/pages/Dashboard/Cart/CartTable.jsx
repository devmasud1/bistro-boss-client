import { MdDeleteForever } from "react-icons/md";

import { toast } from "react-toastify";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const CartTable = ({ item, index }) => {
  const { menuId, name, image, price } = item || {};
  const axiosSecureUrl = useAxiosSecure();
  const [refetch] = useCart();

  const handleDeleteUserItem = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecureUrl
          .delete(`/cart/${menuId}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              refetch();
              toast.success("item delete success!", {
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
      }
    });
  };
  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={image} alt="img" />
            </div>
          </div>
          <div></div>
        </div>
      </td>
      <td>{name}</td>
      <td>{price}</td>
      <th>
        <button
          onClick={handleDeleteUserItem}
          className="btn btn-ghost  text-3xl"
        >
          {" "}
          <MdDeleteForever />{" "}
        </button>
      </th>
    </tr>
  );
};
export default CartTable;
