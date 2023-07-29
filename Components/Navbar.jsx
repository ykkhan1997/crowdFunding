"use client";
import React, { useContext, useState } from "react";
import Logo from "./Logo";
import { CrowdFundingContext } from "@/Context/CrowdFunding";
import Menu from "./Menu";
import Close from "./Close";
const Navbar = () => {
  const menuList = ["Home", "About Us", "Contact Us", "Blog"];
  const { currentAccount, connectWallet, balance } =
    useContext(CrowdFundingContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="backgroundMain">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-20 lg:px-8">
        <div className="relative flex items-center justify-between">
          <div className="flex items-center">
            <a
              aria-label="Company"
              title="Company"
              href="/"
              className="inline-flex items-center mr-8"
            >
              <Logo color={`text-white`} />
              <span className="ml-2 font-bold text-white uppercase tracking-wide">
                Company
              </span>
            </a>
            <ul className="lg:flex hidden space-x-8">
              {menuList.map((menu, i) => (
                <li key={i + 1}>
                  <a
                    aria-label="Our Product"
                    title="Our Product"
                    href="/"
                    className="dimWhite hover:text-white font-medium tracking-wide"
                  >
                    {menu}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <ul className="lg:flex hidden space-x-8">
            {!currentAccount ? (
              <button
                onClick={connectWallet}
                className="text-white bg-blue-500 hover:bg-blue-400 h-12 px-6 rounded shadow-sm font-medium"
              >
                Connect Wallet
              </button>
            ) : (
              <button className="text-white bg-blue-400 h-14 px-6 rounded-2xl shadow-sm font-medium">
                {balance.slice(0, 4)}Matic{" "}
                <span className="bg-slate-500 p-2 rounded-2xl -mr-2">
                  {currentAccount.slice(0, 6)}...{currentAccount.slice(39)}
                </span>
              </button>
            )}
          </ul>
          <div className="lg:hidden z-40 overflow-hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 mr-1"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu />
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="bg-white p-5 rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <a className="inline-flex items-center">
                        <Logo />
                        <span className="ml-2 tracking-wide uppercase text-xl font-bold">
                          Company
                        </span>
                      </a>
                    </div>
                    <div>
                      <button
                        className="bg-slate-200 hover:bg-slate-300 p-1 rounded shadow-sm"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <Close />
                      </button>
                    </div>
                  </div>
                  <navbar>
                    <ul className="space-y-4">
                      {menuList.map((menu, i) => (
                        <li key={i + 1}>
                          <a
                            aria-label="Our Product"
                            title="Our Product"
                            href=""
                            className="font-medium tracking-wide text-gray-800 hover:text-gray-600"
                          >
                            {menu}
                          </a>
                        </li>
                      ))}
                      <li>
                        {!currentAccount ? (
                          <button
                            onClick={connectWallet}
                            className="h-12 px-6 bg-blue-500 hover:bg-blue-400 w-full rounded shadow-sm text-white font-bold tracking-wide"
                          >
                            Connect Wallet
                          </button>
                        ) : (
                          <button className="bg-blue-500 hover h-12 px-6 rounded w-full items-center text-white font-bold">
                            Your Connected With Wallet
                          </button>
                        )}
                      </li>
                    </ul>
                  </navbar>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
