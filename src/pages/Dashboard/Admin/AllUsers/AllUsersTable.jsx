import { FaTrashAlt } from "react-icons/fa";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { FaUsers } from "react-icons/fa6";

const AllUsersTable = ({ user, idx, refetch }) => {
  const { name, email } = user || {};
  const axiosSecureUrl = useAxiosSecure();

  const handleDeleteUser = () => {
    Swal.fire({
      title: "Are you sure?",
      text: `Remove ${user.name} from user collection!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecureUrl
          .delete(`/users/${user._id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              refetch();
              toast.success("user delete successfully!", {
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
  const handleManageRole = () => {
    Swal.fire({
      title: "Are you sure?",
      text: `${user.name} make admin`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, do it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecureUrl
          .patch(`/users/${user._id}`)
          .then((res) => {
            if (res.data.modifiedCount > 0) {
              refetch();
              toast.success(`${user.name} is an admin now!`, {
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
      <th>{idx + 1}</th>
      <td>{name}</td>
      <td>{email}</td>
      <td>
        {user.role === "admin" ? (
          "Admin"
        ) : (
          <button
            onClick={handleManageRole}
            className="bg-[#D1A054] p-2 text-white rounded-lg"
          >
            <FaUsers className="text-lg md:text-xl" />
          </button>
        )}
      </td>
      <td>
        <button
          onClick={handleDeleteUser}
          className="bg-red-600 p-2 text-white rounded-lg"
        >
          <FaTrashAlt className="text-lg md:text-xl" />
        </button>
      </td>
    </tr>
  );
};
export default AllUsersTable;
