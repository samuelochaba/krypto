import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../../images/logo.png";

import React from "react";
import { navBarItems } from "../../lib";
import { TransactionContext } from "../context/TransactionContxet";

const NavbarItem = ({ title, classProps }) => {
  return <li className={`mx-4 cursor-pointer ${classProps}`}>{title}</li>;
};

const ConnectWalletButton = ({ connectWallet, currentAccount }) => {
  return (
    <>
      {currentAccount ? (
        <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
          Wallet connected
        </li>
      ) : (
        <li
          onClick={connectWallet}
          className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]"
        >
          Connect Wallet
        </li>
      )}
    </>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const { connectWallet, currentAccount } =
    React.useContext(TransactionContext);
  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} alt="logo" className="w-32 cursor-pointer" />
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {/* {navBarItems.map((item, key) => (
          <NavbarItem title={item} key={item + key} />
        ))} */}
        <ConnectWalletButton
          connectWallet={connectWallet}
          currentAccount={currentAccount}
        />
      </ul>
      <div className="flex relative ">
        {toggleMenu ? (
          <AiOutlineClose
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <AiOutlineMenu
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <ul className="z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in">
            <li className="text-xl w-full my-2">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            {/* {navBarItems.map((item, key) => (
              <NavbarItem
                title={item}
                key={item + key}
                classProps="my-2 text-lg"
              />
            ))} */}
            <ConnectWalletButton
              connectWallet={connectWallet}
              currentAccount={currentAccount}
            />
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
