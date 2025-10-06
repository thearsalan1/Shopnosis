import { IoMdClose } from "react-icons/io";
import CartContent from "./CartContent";
import { useNavigate } from "react-router-dom";

const CartDrawer = ({ toggleCartDrawer, drawerOpen }) => {
  const navigate = useNavigate();
  const handleCheckOut = () => {
    navigate("/checkout");
    toggleCartDrawer();
  };
  return (
    <div
      className={`fixed top-0 right-0 w-full max-w-sm h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${
        drawerOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-end p-4">
        <button onClick={toggleCartDrawer}>
          <IoMdClose className="h-6 w-6 text-gray-600" />
        </button>
      </div>
      <div className="flex flex-col grow p-4 overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
        <CartContent></CartContent>
      </div>

      <div className="sticky bottom-0 p-4">
        <button
          onClick={handleCheckOut}
          className="  bg-red-500 w-full font-semibold text-white text-md py-3 rounded-lg"
        >
          Checkout
        </button>
        <p className="text-sm tracking-tighter text-gray-500 mt-2 text-center">
          Your savings and tax will be factored in at the final step.
        </p>
      </div>
    </div>
  );
};

export default CartDrawer;
