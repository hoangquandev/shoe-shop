import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Modal = ({ visible, onClose, productDispatch }) => {
  const navigate = useNavigate();
  const products = useSelector((state) => state.reducerCart.products);
  console.log(products);
  const sumQuantity = products.reduce((sum, item) => {
    return sum + item.quantity;
  }, 0);
  if (!visible) return null;

  return (
    <div className="fixed top-0 translate-y-40  -translate-x-full bg-white w-2/5 h-80 border-black border-2">
      <div>
        <div className="flex mt-10 ml-4">
          <div className="w-48 ml-2">
            <img className="w-40 " src={productDispatch.img} alt="" />
          </div>
          <div>
            <p className="text-3xl font-semibold mb-1">
              {productDispatch.name}
            </p>
            <p className="text-2xl font-normal mb-1">
              {productDispatch.message}
            </p>
            <p className="text-xl font-normal mb-1">
              Size {productDispatch.name}
            </p>
            <p className="text-2xl p-3 font-medium">
              {productDispatch.price.toLocaleString()} đ
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-2">
          <button
            className="w-32 pt-2 pb-2 mr-2 bg-black text-white border-2 border-black rounded-3xl"
            onClick={() => {
              navigate("/cart");
            }}
          >
            View Bag ({sumQuantity})
          </button>
          <button
            className="w-32 pt-2 pb-2 ml-2 bg-black text-white border-2 border-black rounded-3xl"
            onClick={() => {
              navigate("/cart");
            }}
          >
            Checkout
          </button>
        </div>
      </div>
      <button
        onClick={onClose}
        className="block fixed right-0 top-0  bg-black bg-opacity-50 pl-3 pr-3"
      >
        Esc
      </button>
    </div>
  );
};

export default Modal;
