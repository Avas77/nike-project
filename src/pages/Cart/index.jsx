import { useEffect, useState } from "react";
import { Footer, Nav } from "../../components";
import { getToken } from "../../utils";
import { viewCart } from "../../api";

const Cart = () => {
  const [order, setOrder] = useState([]);
  const userSession = getToken();
  const email = userSession?.user?.email;
  const price = order.length > 0 ? order[0].price : 0;

  useEffect(() => {
    viewCart({
      email,
    }).then((response) => {
      setOrder(response);
    });
  }, []);

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
          <div className="mb-6">
            <p className="text-[16px] font-medium">Shipping</p>
            <div className="text-[16px]">
              Arrives by Fri, Jan 19{" "}
              <span className="font-small">Edit Location</span>
            </div>
            <p className="text-[16px] font-medium mt-[24px]">Free Pickup</p>
            <span className="font-small">Edit Location</span>
          </div>
          <hr className="pb-6" />
          <div>
            <h1 className="font-medium text-[24px]">Favourites</h1>
            <p>Want to view your favourites?</p>
          </div>
        </div>
        <div className="basis-96">
          <h2 className="mb-[24px] font-medium text-[24px]">Summary</h2>
          <div className="flex flex-col">
            <span className="mb-2">Do you have a promo code?</span>
            <div className="mb-2 flex justify-between">
              <span>Subtotal</span>
              <span>{price}</span>
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
              <span>{price}</span>
            </div>
            <hr />
            <button className="w-full bg-black text-white px-6 py-5 rounded-full mt-12">
              Checkout
            </button>
            <button className="w-full mb-6 bg-white text-black px-6 py-5 rounded-full mt-3 border border-black">
              PayPal
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Cart;
