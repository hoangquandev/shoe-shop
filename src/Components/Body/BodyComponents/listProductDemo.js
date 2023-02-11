import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ListProductDemo = () => {
  const data = useSelector((state) => state.reducerURL.data);
  const isLoading = useSelector((state) => state.reducerURL.isLoading);
  const listProductdata = data.slice(0, 12).map((item, key) => {
    // console.log(item);
    return (
      <React.Fragment>
        <ul className="w-80 h-96 " key={key}>
          <li className="list-none">
            <Link to={`detailProduct/${item._id}`}>
              <img className="w-72 h-72" src={item.img} alt="" />
            </Link>
          </li>
          <li className="font-bold text-center p-1 -translate-x-3 list-none">
            {item.name}
          </li>
          <li className="font-bold text-center p-1 -translate-x-3 text-xl text-red-600 list-none">
            {item.price}đ
          </li>
        </ul>
      </React.Fragment>
    );
  });
  const listLazyLoad = [];
  for (let i = 0; i <= 11; i++) {
    listLazyLoad.push(
      <li className="list-none">
        <img
          className="w-screen"
          src="https://img.freepik.com/free-photo/textured-background-white-tone_53876-128610.jpg"
          alt=""
        />
      </li>
    );
  }

  return (
    <div>
      {isLoading ? (
        <div className="flex flex-wrap justify-around w-full">
          {listLazyLoad}
        </div>
      ) : (
        <div className="flex flex-wrap  w-full pl-12  mt-14">
          {listProductdata}
        </div>
      )}
    </div>
  );
};

export default ListProductDemo;
