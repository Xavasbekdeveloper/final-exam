import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = lazy(() => import("./pages/layout/Layout"));
const NotFound = lazy(() => import("./pages/not-found/Notfound"));
const Home = lazy(() => import("./pages/home/Home"));
const Detail = lazy(() => import("./pages/detail/Detail"));
const Wishlist = lazy(() => import("./pages/wishlist/Wishlist"));
const Cart = lazy(() => import("./pages/cart/Cart"));
const CartView = lazy(() => import("./pages/cart/view/View"));
const CartCheckout = lazy(() => import("./pages/cart/checkout/Checkout"));
const Auth = lazy(() => import("./pages/auth/Auth"));
const Login = lazy(() => import("./pages/login/Login"));
const Admin = lazy(() => import("./pages/admin/index"));
const CreateProduct = lazy(() =>
  import("./pages/admin/create-product/CreateProduct")
);
const CreateCategory = lazy(() =>
  import("./pages/admin/create-category/CreateCategory")
);
const ManageProduct = lazy(() =>
  import("./pages/admin/manage-product/ManageProduct")
);
const ManageCategory = lazy(() =>
  import("./pages/admin/manage-category/ManageCategory")
);

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
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Auth />}>
          <Route path="admin" element={<Admin />}>
            <Route path="create-product" element={<CreateProduct />} />
            <Route path="create-category" element={<CreateCategory />} />
            <Route path="manage-product" element={<ManageProduct />} />
            <Route path="manage-category" element={<ManageCategory />} />
          </Route>
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
