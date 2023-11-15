import { MdDeleteForever } from "react-icons/md";
import useAxios from "../../../hooks/useAxios";
import { toast } from "react-toastify";
import useCart from "../../../hooks/useCart";

const CartTable = ({ item, index }) => {
  const { menuId, name, image, price } = item || {};
  const axiosUrl = useAxios();
  const [refetch] = useCart();

  const handleDeleteUserItem = () => {
    axiosUrl
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
