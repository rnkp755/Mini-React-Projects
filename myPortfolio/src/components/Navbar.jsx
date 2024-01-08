import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import TogglethemeBtn from './TogglethemeBtn';

export default function Navbar() {
      return (
            <header className="shadow sticky z-50 top-0">
                  <nav className="bg-white dark:bg-[#010409] border-gray-200 dark:border-[#212121] px-4 lg:px-6 py-2.5">
                        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                              <Link to="/" className="flex items-center">
                                    <img
                                          src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                                          className="mr-3 h-12 dark:mix-blend-soft-light rounded-lg"
                                          alt="Logo"
                                    />
                              </Link>
                              <div className="flex items-center lg:order-2">
                                    <div
                                          className="text-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                                    >
                                          <TogglethemeBtn />
                                    </div>
                                    <Link
                                          to="/contact"
                                          className="text-white bg-orange-700 dark:bg-[#2869C7] hover:bg-orange-800 hover:dark:bg-[#2b3a73] focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                                    >
                                          Contact Me
                                    </Link>
                              </div>
                              <div
                                    className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                                    id="mobile-menu-2"
                              >
                                    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                                          <li>
                                                <NavLink
                                                      to="/"
                                                      className={({ isActive }) =>
                                                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700 dark:text-[#2869C7]" : "text-gray-700 dark:text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 dark:hover:text-[#2869C7] lg:p-0`
                                                      }
                                                >
                                                      Home
                                                </NavLink>
                                          </li>
                                          <li>
                                                <NavLink
                                                      to='/projects'
                                                      className={({ isActive }) =>
                                                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700 dark:text-[#2869C7]" : "text-gray-700 dark:text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 dark:hover:text-[#2869C7] lg:p-0`
                                                      }
                                                >
                                                      Projects
                                                </NavLink>
                                          </li>
                                          <li>
                                                <NavLink
                                                      to='social-media'
                                                      className={({ isActive }) =>
                                                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700 dark:text-[#2869C7]" : "text-gray-700 dark:text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 dark:hover:text-[#2869C7] lg:p-0`
                                                      }
                                                >
                                                      Social Media
                                                </NavLink>
                                          </li>


                                    </ul>
                              </div>
                        </div>
                  </nav>
            </header>
      );
}

