import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
// import { useEffect, useState } from "react";

const DUMMEY_PRODUCT = [
  {
    key: 2,
    id: "p1",
    price: 6,
    description: "colgate toothbrush",
    title: "toothbrush",
  },
  { key: 1, id: "p2", price: 10, description: "a good pen", title: "ink pen" },
];

const Products = (props) => {
  // const [arr, setArr] = useState();
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await fetch(
  //         "https://redux-frontend-default-rtdb.firebaseio.com/cart.json"
  //       );
  //       if (!res.ok) throw new Error();
  //       const data = await res.json();
  //       console.log(data);
  //       const loadedData = [];
  //       for (let key in data.items) {
  //         loadedData.push({
  //           key: key,
  //           description: data.items[key].description,
  //           title: data.items[key].name,
  //           price: data.items[key].price,
  //           id: data.items[key].id,
  //         });
  //       }
  //       setArr(loadedData);
  //     } catch {
  //       alert("something went wrong");
  //     }
  //   };
  //   fetchData();
  // }, []);
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMEY_PRODUCT.map((el) => (
          <ProductItem
            id={el.id}
            key={el.key}
            title={el.title}
            price={el.price}
            description={el.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
