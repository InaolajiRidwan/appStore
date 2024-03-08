import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import "../Components/Mobile.css";
import NavMobile from "./NavMobile";

const Mobiles = () => {
  const [product, setProduct] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get("https://dummyjson.com/products");
        setProduct(response.data.products);
        setFilteredProducts(response.data.products);
        setIsLoading(false);
        console.log(response.data.products);
      } catch (error) {
        console.error("error fetching data...", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [search]);

  const handleCategoryFilter = (e) => {
    const selectedCategory = e.target.innerText.toLowerCase();
    const newFilteredProducts = product.filter(
      (product) => product.category.toLowerCase() === selectedCategory
    );

    setFilteredProducts(newFilteredProducts);
  };

  const searchMe = (event) => {
    setSearch(event.target.value.toLowerCase());
  };

  useEffect(() => {
    const filteredApi = product.filter((item) =>
      item.title.toLowerCase().includes(search)
    );
    setFilteredProducts(filteredApi);
  }, [product, search]);

  const clickMe = () => {};

  return (
    <div>
      <NavMobile
        handleCategoryFilter={handleCategoryFilter}
        searchMe={searchMe}
        clickMe={clickMe}
      />
      {isLoading
        ? "PRODUCT IS LOADING"
        : filteredProducts.map(
            ({
              thumbnail,
              title,
              description,
              category,
              rating,
              price,
              stock,
              brand,
            }) => {
              return (
                <div
                  className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2 mt-4"
                  style={{ width: "320px" }}
                >
                  <img
                    src={thumbnail ? thumbnail : "hey"}
                    className="card-img-top"
                    alt="..."
                    style={{
                      height: "200px",
                      width: "290px",
                      border: "1px solid white",
                    }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">
                      {description ? description.slice(0, 15) : "more news"}
                    </p>
                    <h5 className="card-title">{category.slice(0, 15)}</h5>
                    <a href="#" className="btn btn-primary">
                      {rating}
                    </a>
                    <h5 className="card-title">{"$" + price}</h5>
                    <h5 className="card-title">{stock}</h5>

                    <a href="#" className="btn btn-primary">
                      {brand}
                    </a>
                  </div>
                </div>
              );
            }
          )}
    </div>
  );
};

export default Mobiles;
