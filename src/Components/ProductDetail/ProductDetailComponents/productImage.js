import React from "react";
import { useSelector, useDispatch } from "react-redux";
const ProductImage = ({ detailProduct, index }) => {
  const isLoading = useSelector((state) => state.reducerURL.isLoading);
  const listLazyLoad = [];
  for (let i = 0; i < 8; i++) {
    listLazyLoad.push(
      <div>
        <div className="flex flex-wrap pl-32 mt-20 ">
          <img
            src="https://img.freepik.com/free-photo/textured-background-white-tone_53876-128610.jpg"
            alt=""
          />
        </div>
      </div>
    );
  }
  return (
    <div className="w-5/6 ml-32 mt-24 mb-20">
      {isLoading ? (
        <div>{listLazyLoad}</div>
      ) : (
        <div className="flex flex-wrap justify-center">
          {detailProduct.imgDetails[index].imgs.map((item, i) => {
            return (
              <div key={i} className="w-80 m-2">
                <img src={item.img} alt="" />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ProductImage;
