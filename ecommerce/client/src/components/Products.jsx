import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import { useState, useEffect } from "react";
import axios from "axios";
const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState(() => {
    console.log("Creating state");
    return [];
  });
  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(() => {
    console.log("Obteneind info");
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat ? `/products?category=${cat}` : "/products"
        );
        console.log(res.data);
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    console.log("Rendering");
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) => [
        [...prev].sort((a, b) => a.createdAt - b.createdAt),
      ]);
    } else if (sort === "asc") {
      setFilteredProducts((prev) => [
        [...prev].sort((a, b) => a.createdAt - b.createdAt),
      ]);
    } else {
      setFilteredProducts((prev) => [
        [...prev].sort((a, b) => a.createdAt - b.createdAt),
      ]);
    }
  }, [sort]);
  return (
    <Container>
      {cat
        ? filteredProducts.map((item, index) => (
            <Product key={item._id} item={item} />
          ))
        : products
            .slice(0, 8)
            .map((item, index) => <Product key={item._id} item={item} />)}
    </Container>
  );
};

export default Products;
