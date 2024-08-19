import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Layout = lazy(() => import("./pages/layout/Layout"));
const Home = lazy(() => import("./pages/home/Home"));
const Detail = lazy(() => import("./pages/detail/Detail"));
const Wishlist = lazy(() => import("./pages/wishlist/Wishlist"));
const Cart = lazy(() => import("./pages/cart/Cart"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
