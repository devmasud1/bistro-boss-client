import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Recommends = () => {
  const [recommends, setRecommends] = useState([]);

  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) =>
        setRecommends(data.filter((item) => item.category === "salad"))
      );
  }, []);
  console.log(recommends);
  return (
    <div className="my-20">
      <SectionTitle
        subHeading="Should Try"
        mainHeading="CHEF RECOMMENDS"
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16 gap-8">
        {recommends.slice(0, 6).map((cartItem) => (
          <div className="card bg-base-100 shadow-xl" key={cartItem._id}>
            <figure>
              <img src={cartItem.image} alt="image"  />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{cartItem.name}</h2>
              <p>{cartItem.recipe}</p>
              <div className="card-actions">
                <button className="btn btn-neutral">add to cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Recommends;
