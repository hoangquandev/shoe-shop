import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import * as Action from "../../Components/ListProduct/Module/Action/action";
import MainContainer from "../../Components/mainContainer";

export default function HomePage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Action.actGetProductAPI("male", "shoes"));
  }, []);
  return (
    <React.Fragment>
      <MainContainer />
    </React.Fragment>
  );
}
