import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const OrdersPage = (props) => {
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
              My Orders
            </a>
          </nav>
        </div>
        <div className="mt-2 md:flex md:items-center md:justify-between">
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:leading-9 sm:truncate">
              My Orders
            </h2>
          </div>
          <div className="mt-4 flex-shrink-0  flex md:mt-0 md:ml-4">
            <Link
                to="/customer"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
            >
              Add More Products
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul>
          <li>
            <a href="#"
               className="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out">
              <div className="flex items-center px-4 py-4 sm:px-6">
                <div className="min-w-0 flex-1 flex items-center">
                  <div className="flex-shrink-0">
                    <img className="h-12 w-12 rounded-full"
                        src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"

                         alt=""/>
                  </div>
                  <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                    <div>
                      <div className="text-sm leading-5 font-medium text-indigo-600 truncate">Tomatoes</div>
                      <div className="mt-2 flex items-center text-sm leading-5 text-gray-500">
                        <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" fill="currentColor"
                             viewBox="0 0 20 20">
                          <path fill-rule="evenodd"
                                d={"M10 2c-1.103 0-2 .897-2 2v5c0 1.103.897 2 2 2h7c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2h-7zm2 2h3a1 1 0 010 2h-3a1 1 0 010-2zm8.586 8a1.41 1.41 0 00-1 .414L15 17h-4a.5.5 0 010-1h2a2 2 0 002-2 1 1 0 00-1-1H8.656c-1.06 0-2.076.422-2.826 1.172l-3.123 3.121a.999.999 0 000 1.414l2.586 2.586a.999.999 0 001.414 0L8 20h7.172c.53 0 1.039-.21 1.414-.586l5-5a1.415 1.415 0 00-1-2.414z"
                                }
                                clip-rule="evenodd"/>
                        </svg>
                        <span className="truncate">Seller name</span>
                      </div>
                    </div>
                    <div className="hidden md:block">
                      <div>
                        <div className="text-sm leading-5 text-gray-900">
                          Applied on
                          <time dateTime="2020-01-07">January 7, 2020</time>
                        </div>
                        <div className="mt-2 flex items-center text-sm leading-5 text-gray-500">
                          <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400" fill="currentColor"
                               viewBox="0 0 20 20">
                            <path fill-rule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                  clip-rule="evenodd"/>
                          </svg>
                          In transit`
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clip-rule="evenodd"/>
                  </svg>
                </div>
              </div>
            </a>
          </li>
          <li className={"border-t border-gray-200"}>
            <a href="#"
               className="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out">
              <div className="flex items-center px-4 py-4 sm:px-6">
                <div className="min-w-0 flex-1 flex items-center">
                  <div className="flex-shrink-0">
                    <img className="h-12 w-12 rounded-full"
                        src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"

                         alt=""/>
                  </div>
                  <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                    <div>
                      <div className="text-sm leading-5 font-medium text-indigo-600 truncate">Tomatoes</div>
                      <div className="mt-2 flex items-center text-sm leading-5 text-gray-500">
                        <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" fill="currentColor"
                             viewBox="0 0 20 20">
                          <path fill-rule="evenodd"
                                d={"M10 2c-1.103 0-2 .897-2 2v5c0 1.103.897 2 2 2h7c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2h-7zm2 2h3a1 1 0 010 2h-3a1 1 0 010-2zm8.586 8a1.41 1.41 0 00-1 .414L15 17h-4a.5.5 0 010-1h2a2 2 0 002-2 1 1 0 00-1-1H8.656c-1.06 0-2.076.422-2.826 1.172l-3.123 3.121a.999.999 0 000 1.414l2.586 2.586a.999.999 0 001.414 0L8 20h7.172c.53 0 1.039-.21 1.414-.586l5-5a1.415 1.415 0 00-1-2.414z"
                                }
                                clip-rule="evenodd"/>
                        </svg>
                        <span className="truncate">Seller name</span>
                      </div>
                    </div>
                    <div className="hidden md:block">
                      <div>
                        <div className="text-sm leading-5 text-gray-900">
                          Applied on
                          <time dateTime="2020-01-07">January 7, 2020</time>
                        </div>
                        <div className="mt-2 flex items-center text-sm leading-5 text-gray-500">
                          <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400" fill="currentColor"
                               viewBox="0 0 20 20">
                            <path fill-rule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                  clip-rule="evenodd"/>
                          </svg>
                          In transit`
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clip-rule="evenodd"/>
                  </svg>
                </div>
              </div>
            </a>
          </li>
          <li className={"border-t border-gray-200"}>
            <a href="#"
               className="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out">
              <div className="flex items-center px-4 py-4 sm:px-6">
                <div className="min-w-0 flex-1 flex items-center">
                  <div className="flex-shrink-0">
                    <img className="h-12 w-12 rounded-full"
                         src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"

                         alt=""/>
                  </div>
                  <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                    <div>
                      <div className="text-sm leading-5 font-medium text-indigo-600 truncate">Tomatoes</div>
                      <div className="mt-2 flex items-center text-sm leading-5 text-gray-500">
                        <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" fill="currentColor"
                             viewBox="0 0 20 20">
                          <path fill-rule="evenodd"
                                d={"M10 2c-1.103 0-2 .897-2 2v5c0 1.103.897 2 2 2h7c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2h-7zm2 2h3a1 1 0 010 2h-3a1 1 0 010-2zm8.586 8a1.41 1.41 0 00-1 .414L15 17h-4a.5.5 0 010-1h2a2 2 0 002-2 1 1 0 00-1-1H8.656c-1.06 0-2.076.422-2.826 1.172l-3.123 3.121a.999.999 0 000 1.414l2.586 2.586a.999.999 0 001.414 0L8 20h7.172c.53 0 1.039-.21 1.414-.586l5-5a1.415 1.415 0 00-1-2.414z"
                                }
                                clip-rule="evenodd"/>
                        </svg>
                        <span className="truncate">Seller name</span>
                      </div>
                    </div>
                    <div className="hidden md:block">
                      <div>
                        <div className="text-sm leading-5 text-gray-900">
                          Applied on
                          <time dateTime="2020-01-07">January 7, 2020</time>
                        </div>
                        <div className="mt-2 flex items-center text-sm leading-5 text-gray-500">
                          <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400" fill="currentColor"
                               viewBox="0 0 20 20">
                            <path fill-rule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                  clip-rule="evenodd"/>
                          </svg>
                          In transit`
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clip-rule="evenodd"/>
                  </svg>
                </div>
              </div>
            </a>
          </li>
          <li className={"border-t border-gray-200"}>
            <a href="#"
               className="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out">
              <div className="flex items-center px-4 py-4 sm:px-6">
                <div className="min-w-0 flex-1 flex items-center">
                  <div className="flex-shrink-0">
                    <img className="h-12 w-12 rounded-full"
                         src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"

                         alt=""/>
                  </div>
                  <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                    <div>
                      <div className="text-sm leading-5 font-medium text-indigo-600 truncate">Tomatoes</div>
                      <div className="mt-2 flex items-center text-sm leading-5 text-gray-500">
                        <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" fill="currentColor"
                             viewBox="0 0 20 20">
                          <path fill-rule="evenodd"
                                d={"M10 2c-1.103 0-2 .897-2 2v5c0 1.103.897 2 2 2h7c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2h-7zm2 2h3a1 1 0 010 2h-3a1 1 0 010-2zm8.586 8a1.41 1.41 0 00-1 .414L15 17h-4a.5.5 0 010-1h2a2 2 0 002-2 1 1 0 00-1-1H8.656c-1.06 0-2.076.422-2.826 1.172l-3.123 3.121a.999.999 0 000 1.414l2.586 2.586a.999.999 0 001.414 0L8 20h7.172c.53 0 1.039-.21 1.414-.586l5-5a1.415 1.415 0 00-1-2.414z"
                                }
                                clip-rule="evenodd"/>
                        </svg>
                        <span className="truncate">Seller name</span>
                      </div>
                    </div>
                    <div className="hidden md:block">
                      <div>
                        <div className="text-sm leading-5 text-gray-900">
                          Applied on
                          <time dateTime="2020-01-07">January 7, 2020</time>
                        </div>
                        <div className="mt-2 flex items-center text-sm leading-5 text-gray-500">
                          <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400" fill="currentColor"
                               viewBox="0 0 20 20">
                            <path fill-rule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                  clip-rule="evenodd"/>
                          </svg>
                          In transit`
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clip-rule="evenodd"/>
                  </svg>
                </div>
              </div>
            </a>
          </li>

        </ul>
      </div>
    </Fragment>
  );
};

export default OrdersPage;
