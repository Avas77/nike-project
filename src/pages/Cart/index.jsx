import React, { useEffect, useState } from "react";
import { Footer, Nav } from "../../components";
import { getToken } from "../../utils";
import { viewCart } from "../../api";

const Cart = () => {
  const [order, setOrder] = useState([]);
  const userSession = getToken();
  const email = userSession?.user?.email;

  useEffect(() => {
    viewCart({
      email,
    }).then((response) => {
      setOrder(response);
    });
  }, []);

  console.log({ order });
  return (
    <main>
      <Nav />
      <div className="mt-[93px] flex pt-[40px] mb-[40px] justify-center px-40">
        <div className="flex-1">
          <h1 className="text-[24px] font-medium">Bag</h1>
          {order &&
            order?.map((item) => (
              <div key={item._id} className="flex py-6">
                <img
                  src={item.imgPath}
                  width={154}
                  alt="shoe"
                  className="pr-6"
                />
                <div>
                  <div className="flex justify-between">
                    <h2 className="text-[16px] font-medium">{item.name}</h2>
                    <span className="text-[16px] font-medium">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-slate-500">{item.category}</p>
                </div>
              </div>
            ))}
          <div>
            <p className="text-[16px] font-medium">Shipping</p>
            <div className="text-[16px]">
              Arrives by Fri, Jan 19{" "}
              <span className="font-small">Edit Location</span>
            </div>
          </div>
        </div>
        <div className="basis-96">
          <h2 className="mb-[24px] font-medium text-[24px]">Summary</h2>
          <div className="flex flex-col">
            <span className="mb-2">Do you have a promo code?</span>
            <div className="mb-2 flex justify-between">
              <span>Subtotal</span>
            </div>
            <div className="mb-2 flex justify-between">
              <span>Estimated Shipping & Handling</span>
              <span>$7.00</span>
            </div>
            <div className="mb-2 flex justify-between">
              <span>Estimated Tax</span>
              <span>-</span>
            </div>
            <hr />
            <div className="my-3 py-4 flex justify-between">
              <span>Total</span>
              <span>$167</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Cart;
