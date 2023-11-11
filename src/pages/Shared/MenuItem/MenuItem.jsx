const MenuItem = ({item}) => {
    const {name, image, recipe, price} = item || {};
    return(
        <div className="flex items-center gap-4">
             <img className="w-24 h-20 rounded-[50%] rounded-tl-none rounded-tr-4xl  rounded-br-4xl rounded-bl-4xl " src={image} alt="" />
             <div>
                <h2 className="uppercase text-xl">{name}------------------</h2>
                <p>{recipe}</p>
             </div>
             <strong><p>${price}</p></strong>
        </div>
    )}
export default MenuItem;