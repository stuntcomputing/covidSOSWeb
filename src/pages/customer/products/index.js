import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const MyOrders = (props) => {
  return (
    <Fragment>
      <div className={"mb-5"}>
        <div>
          <nav className="hidden sm:flex items-center text-sm leading-5 font-medium">
            <Link
              to="/customer"
              className="text-gray-500 hover:text-gray-700 focus:outline-none focus:underline transition duration-150 ease-in-out"
            >
              Home
            </Link>
            <svg
              className="flex-shrink-0 mx-2 h-5 w-5 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-700 focus:outline-none focus:underline transition duration-150 ease-in-out"
            >
              products
            </a>
          </nav>
        </div>
        <div className="mt-2 md:flex md:items-center md:justify-between">
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:leading-9 sm:truncate">
              Available Products
            </h2>
          </div>
          {/*<div className="mt-4 flex-shrink-0  flex md:mt-0 md:ml-4">*/}
          {/*  <div className="mt-1 relative w-full rounded-md shadow-sm">*/}
          {/*    <input*/}
          {/*      id="account_number"*/}
          {/*      className="form-input block w-full pr-10 sm:text-sm font-light sm:leading-5"*/}
          {/*      placeholder="-- -- --"*/}
          {/*    />*/}
          {/*    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">*/}
          {/*      <svg*/}
          {/*        className="h-5 w-5 text-gray-400"*/}
          {/*        fill="currentColor"*/}
          {/*        viewBox="0 0 20 20"*/}
          {/*      >*/}
          {/*        <path d="M9 2C5.146 2 2 5.146 2 9s3.146 7 7 7a6.959 6.959 0 004.574-1.719l.426.426V16l6 6 2-2-6-6h-1.293l-.426-.426A6.959 6.959 0 0016 9c0-3.854-3.146-7-7-7zm0 2c2.773 0 5 2.227 5 5s-2.227 5-5 5-5-2.227-5-5 2.227-5 5-5z" />*/}
          {/*      </svg>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-6">
        <div
          className={
            " bg-white overflow-hidden focus:shadow-lg shadow-md rounded-lg flex items-center justify-center"
          }
        >
          <div className="sm:p-2">
            <div>
              <div className="text-sm leading-5 font-medium mt-3 text-gray-50 truncate flex items-center justify-center">
                <img
                  className="h-20 w-20 rounded-full"
                  src={
                    "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                  }
                  alt="gender"
                />
              </div>
              <div>
                <span className="mt-1 text-1xl leading-9 font-medium text-gray-500 flex items-center justify-center">
                  Tomatoes
                </span>
                <span
                  style={{ marginTop: -10 }}
                  className="text-1md leading-9 font-light text-gray-500 flex items-center justify-center"
                >
                  10 cedis
                </span>
                <span
                  style={{ marginTop: -10 }}
                  className="text-1xl leading-9 font-light text-gray-500 flex items-center justify-center"
                >
                  <div className="mt-6 mb-2">
                    <button
                      type="submit"
                      className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                    >
                      Add To Cart
                    </button>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
            className={
              " bg-white overflow-hidden focus:shadow-lg shadow-md rounded-lg flex items-center justify-center"
            }
        >
          <div className="sm:p-2">
            <div>
              <div className="text-sm leading-5 font-medium mt-3 text-gray-50 truncate flex items-center justify-center">
                <img
                    className="h-20 w-20 rounded-full"
                    src={
                      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    }
                    alt="gender"
                />
              </div>
              <div>
                <span className="mt-1 text-1xl leading-9 font-medium text-gray-500 flex items-center justify-center">
                  Tomatoes
                </span>
                <span
                    style={{ marginTop: -10 }}
                    className="text-1md leading-9 font-light text-gray-500 flex items-center justify-center"
                >
                  10 cedis
                </span>
                <span
                    style={{ marginTop: -10 }}
                    className="text-1xl leading-9 font-light text-gray-500 flex items-center justify-center"
                >
                  <div className="mt-6 mb-2">
                    <button
                        type="submit"
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                    >
                      Add To Cart
                    </button>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div><div
          className={
            " bg-white overflow-hidden focus:shadow-lg shadow-md rounded-lg flex items-center justify-center"
          }
      >
        <div className="sm:p-2">
          <div>
            <div className="text-sm leading-5 font-medium mt-3 text-gray-50 truncate flex items-center justify-center">
              <img
                  className="h-20 w-20 rounded-full"
                  src={
                    "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                  }
                  alt="gender"
              />
            </div>
            <div>
                <span className="mt-1 text-1xl leading-9 font-medium text-gray-500 flex items-center justify-center">
                  Tomatoes
                </span>
              <span
                  style={{ marginTop: -10 }}
                  className="text-1md leading-9 font-light text-gray-500 flex items-center justify-center"
              >
                  10 cedis
                </span>
              <span
                  style={{ marginTop: -10 }}
                  className="text-1xl leading-9 font-light text-gray-500 flex items-center justify-center"
              >
                  <div className="mt-6 mb-2">
                    <button
                        type="submit"
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                    >
                      Add To Cart
                    </button>
                  </div>
                </span>
            </div>
          </div>
        </div>
      </div><div
          className={
            " bg-white overflow-hidden focus:shadow-lg shadow-md rounded-lg flex items-center justify-center"
          }
      >
        <div className="sm:p-2">
          <div>
            <div className="text-sm leading-5 font-medium mt-3 text-gray-50 truncate flex items-center justify-center">
              <img
                  className="h-20 w-20 rounded-full"
                  src={
                    "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                  }
                  alt="gender"
              />
            </div>
            <div>
                <span className="mt-1 text-1xl leading-9 font-medium text-gray-500 flex items-center justify-center">
                  Tomatoes
                </span>
              <span
                  style={{ marginTop: -10 }}
                  className="text-1md leading-9 font-light text-gray-500 flex items-center justify-center"
              >
                  10 cedis
                </span>
              <span
                  style={{ marginTop: -10 }}
                  className="text-1xl leading-9 font-light text-gray-500 flex items-center justify-center"
              >
                  <div className="mt-6 mb-2">
                    <button
                        type="submit"
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                    >
                      Add To Cart
                    </button>
                  </div>
                </span>
            </div>
          </div>
        </div>
      </div><div
          className={
            " bg-white overflow-hidden focus:shadow-lg shadow-md rounded-lg flex items-center justify-center"
          }
      >
        <div className="sm:p-2">
          <div>
            <div className="text-sm leading-5 font-medium mt-3 text-gray-50 truncate flex items-center justify-center">
              <img
                  className="h-20 w-20 rounded-full"
                  src={
                    "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                  }
                  alt="gender"
              />
            </div>
            <div>
                <span className="mt-1 text-1xl leading-9 font-medium text-gray-500 flex items-center justify-center">
                  Tomatoes
                </span>
              <span
                  style={{ marginTop: -10 }}
                  className="text-1md leading-9 font-light text-gray-500 flex items-center justify-center"
              >
                  10 cedis
                </span>
              <span
                  style={{ marginTop: -10 }}
                  className="text-1xl leading-9 font-light text-gray-500 flex items-center justify-center"
              >
                  <div className="mt-6 mb-2">
                    <button
                        type="submit"
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                    >
                      Add To Cart
                    </button>
                  </div>
                </span>
            </div>
          </div>
        </div>
      </div>
        <div
            className={
              " bg-white overflow-hidden focus:shadow-lg shadow-md rounded-lg flex items-center justify-center"
            }
        >
          <div className="sm:p-2">
            <div>
              <div className="text-sm leading-5 font-medium mt-3 text-gray-50 truncate flex items-center justify-center">
                <img
                    className="h-20 w-20 rounded-full"
                    src={
                      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    }
                    alt="gender"
                />
              </div>
              <div>
                <span className="mt-1 text-1xl leading-9 font-medium text-gray-500 flex items-center justify-center">
                  Tomatoes
                </span>
                <span
                    style={{ marginTop: -10 }}
                    className="text-1md leading-9 font-light text-gray-500 flex items-center justify-center"
                >
                  10 cedis
                </span>
                <span
                    style={{ marginTop: -10 }}
                    className="text-1xl leading-9 font-light text-gray-500 flex items-center justify-center"
                >
                  <div className="mt-6 mb-2">
                    <button
                        type="submit"
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                    >
                      Add To Cart
                    </button>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div><div
          className={
            " bg-white overflow-hidden focus:shadow-lg shadow-md rounded-lg flex items-center justify-center"
          }
      >
        <div className="sm:p-2">
          <div>
            <div className="text-sm leading-5 font-medium mt-3 text-gray-50 truncate flex items-center justify-center">
              <img
                  className="h-20 w-20 rounded-full"
                  src={
                    "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                  }
                  alt="gender"
              />
            </div>
            <div>
                <span className="mt-1 text-1xl leading-9 font-medium text-gray-500 flex items-center justify-center">
                  Tomatoes
                </span>
              <span
                  style={{ marginTop: -10 }}
                  className="text-1md leading-9 font-light text-gray-500 flex items-center justify-center"
              >
                  10 cedis
                </span>
              <span
                  style={{ marginTop: -10 }}
                  className="text-1xl leading-9 font-light text-gray-500 flex items-center justify-center"
              >
                  <div className="mt-6 mb-2">
                    <button
                        type="submit"
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                    >
                      Add To Cart
                    </button>
                  </div>
                </span>
            </div>
          </div>
        </div>
      </div><div
          className={
            " bg-white overflow-hidden focus:shadow-lg shadow-md rounded-lg flex items-center justify-center"
          }
      >
        <div className="sm:p-2">
          <div>
            <div className="text-sm leading-5 font-medium mt-3 text-gray-50 truncate flex items-center justify-center">
              <img
                  className="h-20 w-20 rounded-full"
                  src={
                    "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                  }
                  alt="gender"
              />
            </div>
            <div>
                <span className="mt-1 text-1xl leading-9 font-medium text-gray-500 flex items-center justify-center">
                  Tomatoes
                </span>
              <span
                  style={{ marginTop: -10 }}
                  className="text-1md leading-9 font-light text-gray-500 flex items-center justify-center"
              >
                  10 cedis
                </span>
              <span
                  style={{ marginTop: -10 }}
                  className="text-1xl leading-9 font-light text-gray-500 flex items-center justify-center"
              >
                  <div className="mt-6 mb-2">
                    <button
                        type="submit"
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                    >
                      Add To Cart
                    </button>
                  </div>
                </span>
            </div>
          </div>
        </div>
      </div>
      </div>
    </Fragment>
  );
};

export default MyOrders;
