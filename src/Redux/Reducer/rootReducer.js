import { combineReducers } from "redux";
import reducerURL from "../../Components/ListProduct/Module/Reducer/reducer";
import reducerCart from "../../Components/Cart/Module/Reducer/reducer";
const rootReducer = combineReducers({
  reducerURL,
  reducerCart,
});
export default rootReducer;
