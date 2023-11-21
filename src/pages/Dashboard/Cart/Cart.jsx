import { Link } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useCart from "../../../hooks/useCart";
import CartTable from "./CartTable";

const Cart = () => {
  const [,cart] = useCart();

  const totalPrice = cart.reduce((acc, curr) => {
    return acc + curr.price;
  }, 0);

  return (
    <div>
      <SectionTitle subHeading="My Cart" mainHeading="ADD MORE?" />

      <div className="w-full bg-white p-8">
        <div className="flex justify-around items-center text-neutral-600 pb-4">
          <h2 className="text-xl font-semibold">Total orders: {cart.length}</h2>
          <h2 className="text-xl font-semibold">Total price: {totalPrice}</h2>

         {cart.length ?
         <Link to='/dashboard/payment'>
          <button className="btn btn-outline btn-sm"> pay</button> </Link>
          :
         <button disabled className="btn btn-outline"> pay</button>
         }
        </div>

        <div>
          <div className="overflow-x-auto mt-5">
            <table className="table">
              {/* head */}
              <thead className="bg-[#D1A054] text-white font-medium">
                <tr>
                  <th></th>
                  <th>ITEM IMAGE</th>
                  <th>ITEM NAME</th>
                  <th>PRICE</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {/* row */}
                {cart.map((item, idx) => (
                  <CartTable item={item} key={idx} index={idx}></CartTable>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
