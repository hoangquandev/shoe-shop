import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as action from "../../Cart/Module/Action/action";
import * as ActionType from "../../Cart/Module/Constant/constant";
import Modal from "./modal";

const ProductMain = ({ detailProduct, getIndexImg, indexPress }) => {
  const [size, setSize] = useState("");
  const [flag, setFlag] = useState(false);
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const productDispatch = {
    id: detailProduct._id,
    name: detailProduct.name,
    message: detailProduct.message,
    sizes: detailProduct.sizes,
    size: size,
    price: detailProduct.price,
    quantity: 1,
    color: detailProduct.imgDetails[indexPress].color,
    img: detailProduct.imgDetails[indexPress].imgs[indexPress].img,
  };
  const favorProduct = {
    id: detailProduct._id,
    name: detailProduct.name,
    message: detailProduct.message,
    sizes: detailProduct.sizes,
    size: size,
    price: detailProduct.price,
    quantity: 1,
    color: detailProduct.imgDetails[indexPress].color,
    img: detailProduct.imgDetails[indexPress].imgs[indexPress].img,
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = (e) => {
    const { value } = e.target;
    setSize(value);
  };

  const checkSize = () => {
    if (size === "") {
      setFlag(true);
      return;
    }
    setFlag(false);
  };
  const addProduct = () => {
    if (size) {
      handleOpen();
      dispatch(
        action.createAction({
          type: ActionType.ADD_TO_CARD,
          payload: productDispatch,
        })
      );
    }
  };
  const listSize = detailProduct.sizes.map((item, index) => (
    <div key={index} className="w-12">
      <label className="">
        <input
          type="radio"
          name="box"
          className="opacity-0"
          value={item.size}
          onChange={handleChange}
          onBlur={checkSize}
        />
        <div
          className={
            size === item.size
              ? "pl-2.5 pr-2.5 rounded-2xl text-center border-2 border-black font-medium bg-slate-100 shadow-2xl hover:border-black"
              : "pl-2.5 pr-2.5 rounded-2xl text-center border-2 border-white font-medium bg-slate-100 shadow-2xl "
          }
        >
          {item.size}
        </div>
      </label>
    </div>
  ));
  const isLoading = useSelector((state) => state.reducerURL.isLoading);
  const listSizeLazyLoad = detailProduct.sizes.map((item, index) => {
    <div key={index}>
      <label>
        <input type="radio" name="box" value={item.size} />
        <div>{item.size}</div>
      </label>
    </div>;
  });

  return (
    <div className="w-full mt-24">
      <div>
        <h3 className="text-2xl font-bold">Men's shoes</h3>
        {isLoading ? (
          <span></span>
        ) : (
          <h4 className="uppercase text-3xl font-semibold">
            {detailProduct.name}
          </h4>
        )}
      </div>
      <div>
        {isLoading ? (
          <span></span>
        ) : (
          <h4 className="text-2xl text-red-500">
            {detailProduct.price.toLocaleString()}đ
          </h4>
        )}
      </div>
      <div className="flex">
        {detailProduct.imgDetails.map((item, index) => {
          return (
            <div key={index}>
              {isLoading ? (
                <span></span>
              ) : (
                <img
                  className={
                    indexPress === index
                      ? "w-32 ml-1 mt-2 border-2 border-black"
                      : "w-32 ml-1 mt-2 "
                  }
                  src={item.imgs[0].img}
                  alt=""
                  onClick={() => {
                    getIndexImg(index);
                  }}
                />
              )}
            </div>
          );
        })}
      </div>
      <div>
        <div>
          <div className="flex justify-around w-2/3 mt-2">
            <p>Select size</p>
            <p className="opacity-70">Size guide</p>
          </div>
          <div className="mb-2">
            {isLoading ? (
              <div>{listSizeLazyLoad}</div>
            ) : (
              <div className="w-2/3 flex flex-wrap mb-2">{listSize}</div>
            )}
          </div>
        </div>
        {flag && (
          <label className="bg-slate-300 w-2/3 text-red-700 p-2 font-semibold ">
            Please choose size before add to cart!
          </label>
        )}
      </div>
      <div className="w-2/3 flex mt-5 mb-4 justify-around">
        <div>
          {isLoading ? (
            <span></span>
          ) : (
            <button
              className="p-2 bg-black text-white border-2 border-black rounded-3xl w-32 font-semibold"
              onClick={() => {
                checkSize();
                addProduct();
              }}
            >
              Add to cart
            </button>
          )}
        </div>
        <div>
          {isLoading ? (
            <span></span>
          ) : (
            <button className="p-2 bg-white text-black border-2 border-black rounded-3xl w-32 font-semibold">
              Favorite
              <img
                className="w-6 float-right -translate-x-2.5"
                src="https://icon2.cleanpng.com/20181205/ygf/kisspng-vector-graphics-portable-network-graphics-computer-5c08a719b25eb7.9370489915440709377306.jpg"
                alt=""
              />
            </button>
          )}
        </div>
      </div>
      {/* Modal component */}
      <Modal
        onClose={handleClose}
        visible={open}
        productDispatch={productDispatch}
      />
    </div>
  );
};

export default ProductMain;
