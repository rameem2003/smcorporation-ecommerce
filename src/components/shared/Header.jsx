import React, { useEffect, useRef, useState } from "react";
import Container from "../common/Container";
import Flex from "../common/Flex";
import List from "./../common/List";
import ListItem from "./../common/ListItem";
import Image from "../common/Image";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { allProducts } from "../../redux/features/LoadAllProductsSlice";
import { removeProduct } from "../../redux/features/CartSlice";
import { logoutUser } from "../../redux/features/AuthSlice";
import { IoGridOutline } from "react-icons/io5";
import { FaAngleDown, FaCartShopping } from "react-icons/fa6";
import { FaSearch, FaTimes, FaUserCircle } from "react-icons/fa";

const Header = () => {
  const products = useSelector((state) => state.allProducts.products); // get all products from the redux
  const cart = useSelector((state) => state.cartArray.cart); // get cart info from the redux
  const customerdata = useSelector((state) => state.user.user); // get customer info from the redux
  const dispatch = useDispatch(); // dispatch instance
  const navigate = useNavigate(); // navigation instance
  // all states and refs for toggle context menu
  const [toggleCategory, setToggleCategory] = useState(false);
  const [toggleAccount, setToggleAccount] = useState(false);
  const [searchRef, setSearchRef] = useState(false);
  const [toggleCart, setToggleCart] = useState(false);
  const [category, setCategory] = useState([]); // state for unique category
  const [search, setSearch] = useState([]); // initial state all products for searching
  const [filterResult, setFilterResult] = useState([]); // state for storing the products after searching
  const categoryRef = useRef();
  const accountRef = useRef();
  const cartRef = useRef();
  const searchResultRef = useRef();

  // function for remove item from cart
  const removeItemFromCart = (item) => {
    dispatch(removeProduct(item.id));
  };

  // function for handle search
  const handleSearch = (e) => {
    if (e.target.value == "") {
      setFilterResult([]);
    } else {
      const searchResult = search.filter((searchItem) =>
        searchItem.title.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setFilterResult(searchResult); // state for store the search result
    }
  };

  // function for logout customer
  const handleLogout = () => {
    dispatch(logoutUser({ status: false }));

    setTimeout(() => {
      location.reload();
    }, 2000);
  };

  useEffect(() => {
    /**
     * function for store all products coming from the API
     * store in redux store
     */

    const fetchProducts = async () => {
      const res = await axios.get("https://smcorpapi.vercel.app/api/products");
      dispatch(allProducts(res.data));
      setSearch(res.data);
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    document.addEventListener("click", (e) => {
      categoryRef.current.contains(e.target)
        ? setToggleCategory(true)
        : setToggleCategory(false);
      accountRef.current.contains(e.target)
        ? setToggleAccount(true)
        : setToggleAccount(false);
      cartRef.current.contains(e.target)
        ? setToggleCart(true)
        : setToggleCart(false);
      searchResultRef.current.contains(e.target)
        ? setSearchRef(true)
        : setSearchRef(false);
    });
  }, []);

  useEffect(() => {
    setCategory([...new Set(products.map((item) => item.category))]);
  }, [products]);

  return (
    <header className="bg-red-600 py-2">
      <Container>
        <Flex className="items-center gap-2 xl:gap-5 justify-between">
          <div className="w-3/12 md:w-2/12 relative">
            <div ref={categoryRef}>
              <Flex className="items-center justify-center gap-2 cursor-pointer">
                <IoGridOutline className=" text-[24px] text-white" />

                <span className=" hidden lg:block font-bold text-sm xl:text-xl text-white">
                  View Categories
                </span>

                <FaAngleDown className="hidden lg:block text-[24px] text-white" />
              </Flex>
            </div>
            {toggleCategory && (
              <List className=" w-[300px] md:w-[300px] bg-red-600 absolute top-[48px] left-0 md:left-[18px] z-50">
                {category.map((item, i) => (
                  <ListItem
                    key={i}
                    className=" capitalize font-bold text-xl text-white px-2 py-4 block duration-300 ease-in-out hover:pl-5 hover:bg-red-700"
                  >
                    <Link>{item}</Link>
                  </ListItem>
                ))}
              </List>
            )}
          </div>
          <div className="w-6/12 md:w-7/12 xl:w-8/12">
            <div ref={searchResultRef} className=" relative w-full">
              <input
                onChange={handleSearch}
                className=" w-full rounded-[5px] p-3 pr-[50px] font-medium text-lg"
                type="text"
                name=""
                id=""
                placeholder="Search by keyword"
              />

              <FaSearch className=" text-[24px] text-black absolute right-3 top-[50%] translate-y-[-50%]" />

              {searchRef && (
                <div className="w-full max-h-[300px] overflow-y-scroll bg-white fixed md:absolute top-[140px] md:top-14 left-0 z-[1]">
                  {filterResult.length > 0 ? (
                    filterResult.map((filterItem, i) => (
                      <Flex
                        key={i}
                        className={`p-2 mb-2 bg-white items-center justify-between hover:bg-gray-200`}
                      >
                        <Flex className={`items-center gap-4`}>
                          <Image
                            src={filterItem.thumbnail}
                            alt={""}
                            className={`w-[80px] h-[80px] object-cover`}
                          />
                          <div>
                            <h2 className="font-semibold text-xl">
                              {filterItem.title}
                            </h2>

                            <h3 className="font-normal text-sm mt-1">
                              ৳ {filterItem.price} BDT
                            </h3>
                          </div>
                        </Flex>

                        <Link
                          to={`/product/${filterItem.id}`}
                          className=" px-4 py-2 bg-slate-800 text-white font-normal text-sm mr-2"
                        >
                          View
                        </Link>
                      </Flex>
                    ))
                  ) : (
                    <h1 className=" font-dm font-semibold text-xl text-center mt-2">
                      No Products Found
                    </h1>
                  )}
                </div>
              )}
            </div>
          </div>
          <div className="w-3/12 md:w-2/12">
            <Flex className="items-center gap-5 justify-end relative">
              <div ref={accountRef}>
                <Flex className="items-center gap-2 cursor-pointer">
                  <FaUserCircle className=" text-[24px] text-white" />

                  <span className="hidden lg:block font-bold text-sm xl:text-xl text-white">
                    Account
                  </span>
                </Flex>
              </div>

              {toggleAccount && (
                <>
                  {customerdata.status ? (
                    <div className="w-[300px] p-3 bg-red-600 absolute top-[48px] right-0 z-50">
                      <h3 className=" font-medium text-lg text-white">
                        Welcome,
                      </h3>

                      <h2 className=" font-bold text-xl text-white">
                        {customerdata.user}
                      </h2>

                      <p className="font-normal text-base text-white">
                        Phone: {customerdata.phone}
                      </p>

                      <Flex className="mt-5 gap-2">
                        <Link
                          to="/profile"
                          className="flex items-center justify-center gap-2 w-[50%] p-2 border-[1px] border-white font-semibold text-lg text-white"
                        >
                          Profile
                        </Link>
                        <button
                          onClick={handleLogout}
                          className="flex items-center justify-center gap-2 w-[50%] p-2 border-[1px] border-white font-semibold text-lg text-white"
                        >
                          Logout
                        </button>
                      </Flex>
                    </div>
                  ) : (
                    <Flex className="w-[300px] p-3 bg-red-600 absolute top-[48px] right-0 z-50 gap-2">
                      <button
                        onClick={() => navigate("/login")}
                        className="flex items-center justify-center gap-2 w-[50%] p-2 border-[1px] border-white font-semibold text-lg text-white"
                      >
                        Login
                      </button>
                      <button
                        onClick={() => navigate("/signup")}
                        className="flex items-center justify-center gap-2 w-[50%] p-2 border-[1px] border-white font-semibold text-lg text-white"
                      >
                        Signup
                      </button>
                    </Flex>
                  )}
                </>
              )}

              <div ref={cartRef}>
                <Flex className="items-center gap-2 cursor-pointer">
                  <FaCartShopping className=" text-[24px] text-white" />

                  <span
                    className="hidden lg:flex gap-2 items-center jus font-bold text-sm
                    xl:text-xl text-white"
                  >
                    Cart{" "}
                    <span className="bg-white text-sm text-black flex items-center justify-center h-[20px] w-[20px] rounded-full">
                      {cart.length}
                    </span>
                  </span>
                </Flex>
              </div>

              {toggleCart && (
                <div className=" w-[300px] md:w-[360px] p-3 bg-slate-800 absolute top-[48px] right-0 z-50 ">
                  <div className="max-h-[220px] overflow-y-scroll no-scrollbar">
                    {cart.length > 0 ? (
                      cart.map((item, i) => (
                        <Flex className="items-center gap-5 mb-5 w-full group hover:bg-white">
                          <div className="w-3/12">
                            <Image
                              src={item.thumbnail}
                              alt="item"
                              className="w-[80px] h-[80px]"
                            />
                          </div>

                          <div className="w-9/12">
                            <Flex className="items-center justify-between">
                              <h3 className=" font-medium text-lg text-white group-hover:text-black">
                                {item.title.slice(0, 20)}
                              </h3>

                              <FaTimes
                                onClick={() => removeItemFromCart(item)}
                                className="cursor-pointer text-white group-hover:text-black"
                              />
                            </Flex>

                            <p className=" font-semibold text-base text-white group-hover:text-black">
                              Qun: x {item.qun}
                            </p>
                            <p className=" font-semibold text-base text-white group-hover:text-black">
                              Price: ৳ {item.price} BDT
                            </p>
                          </div>
                        </Flex>
                      ))
                    ) : (
                      <h2 className=" font-bold text-lg text-white">
                        Your Cart is empty
                      </h2>
                    )}
                  </div>

                  <button
                    onClick={() => navigate("/cart")}
                    className="mt-10 flex items-center justify-center gap-2 w-full p-2 border-[1px] border-white font-semibold text-lg text-white"
                  >
                    Go to Cart
                  </button>
                </div>
              )}
            </Flex>
          </div>
        </Flex>
      </Container>
    </header>
  );
};

export default Header;
