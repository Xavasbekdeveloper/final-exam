import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Layout = lazy(() => import("./pages/layout/Layout"));
const Home = lazy(() => import("./pages/home/Home"));
const Detail = lazy(() => import("./pages/detail/Detail"));
const Wishlist = lazy(() => import("./pages/wishlist/Wishlist"));
const Cart = lazy(() => import("./pages/cart/Cart"));
const CartView = lazy(() => import("./pages/cart/view/View"));
const CartCheckout = lazy(() => import("./pages/cart/checkout/Checkout"));
const Auth = lazy(() => import("./pages/auth/Auth"));
const Login = lazy(() => import("./pages/login/Login"));
const Admin = lazy(() => import("./pages/admin/index"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />}>
            <Route path="view" element={<CartView />} />
            <Route path="checkout" element={<CartCheckout />} />
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Auth />}>
          <Route path="admin" element={<Admin />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
