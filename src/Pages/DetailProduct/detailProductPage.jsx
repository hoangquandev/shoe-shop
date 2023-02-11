import React from "react";
import { useParams } from "react-router-dom";
import ProductDetail from "../../Components/ProductDetail/productDetail";
const DetailProductPage = () => {
  const { id } = useParams();
  return (
    <React.Fragment>
      <ProductDetail id={id} />
    </React.Fragment>
  );
};

export default DetailProductPage;
