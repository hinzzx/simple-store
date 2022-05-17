import React from "react";
import { useEffect, useState } from "react";
import { MainContainer, Article, Header1 } from "../styles/Home.styles";
import { motion } from "framer-motion";
import axios from 'axios';

const Home = () => {
  // fetch('https://fakestoreapi.com/products')
  //           .then(res=>res.json())
  //           .then(json=>console.log(json));

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <MainContainer>
      {/* All the content in Home Page - currently as a Parallax; */}
      <Article>
        <Header1 as={motion.h1} initial={{ x: -400 }} animate={{ x: 0 }}>
          Featured PROMOTIONS
        </Header1>
        <h3>
          Fetching products from an API. Implementing the design soon. // Going to
          be parallax scroll, that's why it has scrollbars right now.
        </h3>

        {products.map((product) => {
          return (
            // products fetched from API, going to be fixed and styled soon.
            <table>
              <tr>
                <td
                  style={{
                    border: "1px solid black",
                    textAlign: "left",
                    padding: "8px",
                    width: "50%",
                  }}
                >
                  {product.title}
                </td>
                <td
                  style={{
                    border: "1px solid black",
                    textAlign: "left",
                    padding: "8px",
                    width: "50%",
                  }}
                >
                  {product.price} лв.
                </td>
              </tr>
            </table>
          );
        })}
      </Article>
    </MainContainer>
  );
};

export default Home;
