import React from "react";
import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router";
import Loader from "./Loader";

function AppLayOut() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  // console.log(navigation);
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] ">
      {isLoading && <Loader />}
      {/* {true && <Loader/>} */}
      <Header />
      <div className="overflow-scroll ">      
        <main className=" max-w-3xl mx-auto"> 
         <Outlet />
      </main>
      </div>

      <CartOverview />
    </div>
  );
}

export default AppLayOut;
