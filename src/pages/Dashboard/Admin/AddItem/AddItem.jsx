import { useForm } from "react-hook-form";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { toast } from "react-toastify";

const image_key = import.meta.env.VITE_IMAGE_API_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_key}`;

const AddItem = () => {
  const { register, handleSubmit } = useForm();
  const axiosPublicUrl = useAxiosPublic();
  const axiosSecureUrl = useAxiosSecure();

  const onSubmit = async (data) => {
    console.log(data);

    const imageFile = { image: data.image[0] };

    const res = await axiosPublicUrl.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const menuItem = {
        name: data.name,
        recipe: data.recipe,
        image: res.data.data.display_url,
        category: data.category,
        price: parseFloat(data.price),
      };

      const response = await axiosSecureUrl.post("/menu", menuItem);
      console.log("menu", response.data);
      if (response.data.insertedId) {
        toast.success("item successfully added!", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        toast.error("something wrong!", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }

    console.log("img", res.data);
  };
  return (
    <div>
      <SectionTitle subHeading="What's new?" mainHeading="ADD AN ITEM" />

      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 bg-[#F3F3F3] w-full p-10"
        >
          {/* Recipe name */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Recipe name*</span>
            </label>
            <input
              {...register("name")}
              type="text"
              placeholder="Recipe name"
              className="input input-bordered w-full"
            />
          </div>

          {/* category & price */}
          <div className="flex items-start gap-5">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Category*</span>
              </label>
              <select
                {...register("category", { required: true })}
                className="select select-accent w-full "
                defaultValue="null"
              >
                <option disabled value="null">
                  Selected a category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Price*</span>
              </label>
              <input
                {...register("price", { required: true })}
                type="text"
                placeholder="Recipe Price"
                className="input input-bordered w-full"
              />
            </div>
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Recipe Details*</span>
            </label>
            <textarea
              {...register("recipe", { required: true })}
              className="textarea textarea-bordered h-32"
              placeholder="Recipe Details"
            ></textarea>
          </div>

          <div className="form-control w-full">
            <input
              {...register("image")}
              type="file"
              className="file-input file-input-ghost w-full max-w-xs"
            />
          </div>

          <button className="bg-[#B58130] text-white btn hover:text-black">
            <input type="submit" value="Add Item" />
            <FaUtensils />
          </button>
        </form>
      </div>
    </div>
  );
};
export default AddItem;
