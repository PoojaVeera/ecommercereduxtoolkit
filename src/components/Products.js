import React from "react";
import { BOX, ProductS } from "./Products.styles";
import data from "../data.json";
import { useDispatch } from "react-redux";
import { incrementCart, decrementCart } from "../Redux/cartReducer.js";
export const Products = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <ProductS>
        {data.products.map((product) => (
          <div key={product.id}>
            <BOX>
              name: {product.name}
              <br />
              price: {product.price}
              <br />
              <button
                onClick={() =>
                  dispatch(
                    incrementCart({
                      productName: product.name,
                      productPrice: Number(product.price),
                    })
                  )
                }
              >
                add
              </button>
              &nbsp;&nbsp;
              <button
                onClick={() =>
                  dispatch(
                    decrementCart({
                      productName: product.name,
                      productPrice: Number(product.price),
                    })
                  )
                }
              >
                remove
              </button>
            </BOX>
          </div>
        ))}
      </ProductS>
    </div>
  );
};
