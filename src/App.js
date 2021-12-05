import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { uiActions } from "./store/ui-slice";
import { useDispatch } from "react-redux";
import Notification from "./components/UI/Notification";

let init = true;

function App() {
  const state = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const load = useSelector((state) => state.ui.notif);
  const [fb, setFb] = useState();
  useEffect(() => {
    const putData = async () => {
      try {
        dispatch(
          uiActions.setnotif({
            staus: "pending",
            msg: "sending the data",
            title: "loading...",
          })
        );
        const res = await fetch(
          "https://redux-backend-1be80-default-rtdb.firebaseio.com/cart.json",
          {
            method: "PUT",
            body: JSON.stringify(cart),
          }
        );
        if (!res.ok) throw new Error();
        if (res.ok) {
          dispatch(
            uiActions.setnotif({
              staus: "success",
              msg: "Your request was succesfull",
              title: "Sucess!",
            })
          );
        }
      } catch {
        dispatch(
          uiActions.setnotif({
            status: "error",
            msg: "something went wrong",
            title: "try again later",
          })
        );
      }
    };
    if (init) {
      init = false;
      return;
    }
    putData();
  }, [cart, dispatch]);

  const fetchData = async () => {
    try {
      const res = await fetch(
        "https://redux-backend-1be80-default-rtdb.firebaseio.com/cart.json"
      );
      const data = await res.json();
      if (!res.ok) throw new Error();
      setFb(data);
    } catch {
      alert("something went wrong");
    }
  };
  useEffect(() => {
    fetchData();
  }, [state]);
  return (
    <>
      {load && (
        <Notification
          status={load.status}
          message={load.msg}
          title={load.title}
        />
      )}
      <Layout>
        {state && <Cart items={fb} />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
