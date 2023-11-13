const FoodCard = ({ cartItem }) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={cartItem.image} alt="image" />
      </figure>
      <p className="absolute top-5 right-5 w-16 bg-slate-700 text-stone-200 p-2 rounded-tl-lg">${cartItem.price}</p>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{cartItem.name}</h2>
        <p>{cartItem.recipe}</p>
        <div className="card-actions">
          <button className="btn btn-outline border-0 border-b-2 mt-4">add to cart</button>
        </div>
      </div>
    </div>
  );
};
export default FoodCard;
