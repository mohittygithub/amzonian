import React, { useEffect } from "react";
import Product from "../components/Product";
import { productsList } from "../actions/productActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { useSelector, useDispatch } from "react-redux";

const HomeScreen = () => {
  const productList = useSelector((state) => state.productList);
  const dispatch = useDispatch();
  const { loading, products, error } = productList;
  // console.log("products =", products);

  useEffect(() => {
    dispatch(productsList());
  }, [dispatch]);
  return (
    <div>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="row center">
          {products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};
export default HomeScreen;
