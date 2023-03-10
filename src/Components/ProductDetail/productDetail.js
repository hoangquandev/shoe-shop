import React from "react";
import API from "../../Axios/API";
// import { useState } from "react";
// import { StarIcon } from "@heroicons/react/20/solid";
// import { RadioGroup } from "@headlessui/react";
import * as action from "../ListProduct/Module/Action/action";
import * as ActionType from "../ListProduct/Module/Constant/constant";
import { useSelector, useDispatch } from "react-redux";
import ProductMain from "./ProductDetailComponents/productMain";
import ProductImage from "./ProductDetailComponents/productImage";
import ProductMoreDetail from "./ProductDetailComponents/productMoreDetail";
const ProductDetail = ({ id }) => {
  const dispatch = useDispatch();
  const [detailProduct, setDetailProduct] = React.useState(null);
  React.useEffect(() => {
    const callAPI = async () => {
      dispatch(
        action.createAction({
          type: ActionType.IS_LOADING_LIST_PRODUCT,
          payload: true,
        })
      );
      const res = await API(`/product/${id}`, "GET");
      setDetailProduct(res.data);
      // console.log(res.data);
      dispatch(
        action.createAction({
          type: ActionType.IS_LOADING_LIST_PRODUCT,
          payload: false,
        })
      );
    };
    callAPI();
  }, [id]);
  const [index, setIndex] = React.useState(0);
  const getIndexImg = (index) => {
    setIndex(index);
  };
  const isLoading = useSelector((state) => state.reducerURL.isLoading);
  // console.log(isLoading);
  const dataLazyLoad = {
    color: 2,
    _id: "5f82f4c0de96ef2b3d91c17c",
    typeProduct: "shoes",
    img: "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/d6f66b63-127f-4856-a4ed-2fc54f2aa4d6/jordan-adg-2-golf-shoe-rjHVg9.jpg",
    name: "Jordan ADG 2",
    message: "Jordan ADG 2\nMen's Golf Shoe",
    price: 4109000,
    description:
      "Mixing elements from 4 iconic Air Jordans, the Jordan Mars 270 Low brings AJ obsession to a new space. The low-top features an enormous cushioning unit and springy foam for non-stop underfoot comfort. It's got a fresh yet familiar look that's primed for the streets.",
    sizes: [
      { size: "38.5" },
      { size: "38.5" },
      { size: "38.5" },
      { size: "38.5" },
      { size: "38.5" },
      { size: "38.5" },
      { size: "38.5" },
      { size: "38.5" },
      { size: "38.5" },
      { size: "38.5" },
      { size: "38.5" },
      { size: "38.5" },
    ],
    imgDetails: [
      {
        _id: "5ffc83ee52676a0017c94494",
        color: "white",
        imgs: [
          {
            img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/71a804c7-9308-4384-92c6-b00c41e0c3f0/jordan-adg-2-golf-shoe-rjHVg9.jpg",
          },
          {
            img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/26970b18-e001-4219-afd2-248b861704cd/jordan-adg-2-golf-shoe-rjHVg9.jpg",
          },
          {
            img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/e0ed47ec-d942-4187-8032-aae47fe048a0/jordan-adg-2-golf-shoe-rjHVg9.jpg",
          },
          {
            img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/4c5d70f6-5b81-4ccc-a333-c898c49c3f9a/jordan-adg-2-golf-shoe-rjHVg9.jpg",
          },
          {
            img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/1383922b-28a3-49dd-8eda-e145fa7a7a7e/jordan-adg-2-golf-shoe-rjHVg9.jpg",
          },
          {
            img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/ae85d533-8413-45ca-a9c4-72c9ecd1b425/jordan-adg-2-golf-shoe-rjHVg9.jpg",
          },
          {
            img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99c7800e-5848-4156-a0a6-8d02c0e1cd7f/jordan-adg-2-golf-shoe-rjHVg9.jpg",
          },
          {
            img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/32f71a40-d62b-4a27-8d6c-97f7a3fe1133/jordan-adg-2-golf-shoe-rjHVg9.jpg",
          },
          {
            img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/5d87f119-8b50-49ae-9b1e-51ad473c75af/jordan-adg-2-golf-shoe-rjHVg9.jpg",
          },
          {
            img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/6453bb43-9067-448d-99bf-4cf9661d7392/jordan-adg-2-golf-shoe-rjHVg9.jpg",
          },
          {
            img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/9fbdb809-f097-42c9-9380-dfc93c83b58a/jordan-adg-2-golf-shoe-rjHVg9.jpg",
          },
        ],
      },
    ],
    userCreated: "5f82dc328fdc3827c3f3fff1",
    gender: "male",
    status: 1,
  };
  return (
    <div>
      {isLoading ? (
        <div>
          <div className="w-80">
            <ProductImage detailProduct={dataLazyLoad} index={0} />
          </div>
          <div>
            <div className="w-60">
              <ProductMain
                detailProduct={dataLazyLoad}
                getIndexImg={getIndexImg}
                indexPress={0}
              />
            </div>
            <div>
              <ProductMoreDetail />
            </div>
          </div>
        </div>
      ) : (
        <div>
          {detailProduct && (
            <div className="flex">
              <div className="w-4/5">
                <ProductImage detailProduct={detailProduct} index={0} />
              </div>
              <div className="w-2/5 block">
                <div className="w-full block">
                  <ProductMain
                    detailProduct={detailProduct}
                    getIndexImg={getIndexImg}
                    indexPress={0}
                  />
                </div>
                {/* <div>
                  <ProductMoreDetail />
                </div> */}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
