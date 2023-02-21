import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./dashboard.css";
import Home from "../Home/Home";
import UserList from "../userList/UserList";
import User from "../user/User";
import NewUser from "../newUser/NewUser";
import ProductList from "../productList/ProductList";
import Product from "../product/Product";
import NewProduct from "../newProduct/NewProduct";
import ListList from "../listList/ListList";
import List from "../list/List";
import NewList from "../newList/NewList";
import { Routes, Route } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/movies" element={<ProductList />} />
          <Route path="/movie/:movieId" element={<Product />} />
          <Route path="/newMovie" element={<NewProduct />} />
          <Route path="/newMovie" element={<NewProduct />} />
          <Route path="/lists" element={<ListList />} />
          <Route path="/list/:listId" element={<List />} />
          <Route path="/newList" element={<NewList />} />
        </Routes>
      </div>
    </>
  );
};

export default Dashboard;
