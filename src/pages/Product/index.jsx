import { useEffect, useState } from "react";
import Nav from "../../components/Nav";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import { bookProducts, getSingleProduct } from "../../api";
import { useNavigate, useParams } from "react-router-dom";
import { getToken } from "../../utils";

const Product = () => {
  const [product, setProduct] = useState({});
  const userSession = getToken();
  const token = userSession?.token;
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getSingleProduct(id).then((response) => {
      setProduct(response);
    });
  }, []);

  const handleBooking = () => {
    bookProducts(id, {
      email: userSession?.user?.email,
    });
    navigate("/cart");
  };

  return (
    <main>
      <Nav />
      <div className="mt-[93px]">
        <Banner />
        <div className="flex justify-center gap-[48px] pb-10">
          <div className="mt-[48px] mx-[8px] pl-[48px]">
            <img
              src={product?.singleImg}
              alt="shoes1"
              className="w-[535px] max-w-[535px] h-[669px]"
            />
          </div>
          <div className="w-[456px] mt-[48px] mr-[8px] pl-[24px] pr-[48px]">
            <h1 className="text-[24px] font-medium">{product?.name}</h1>
            <h2 className="text-[16px] font-medium pb-[4px]">
              {product?.category}
            </h2>
            <div className="text-[16px] mt-[12px] font-medium mb-[12px]">
              {product?.price}
            </div>
            <br />
            <div className="flex gap-2">
              <img
                src={product?.imgPath}
                alt="shoes 1"
                className="max-w-[70px]"
              />
              <img
                src="https://images.squarespace-cdn.com/content/v1/57e08973be6594395eeec66d/1494371685710-6Q1V6U4FX0WTIG4QXLN2/image-asset.png?format=1500w"
                alt="shoes 1"
                className="max-w-[70px]"
              />
            </div>
            <div className="flex justify-between mt-5">
              <span>Select Size</span>
              <span>Size Guide</span>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <div className="border border-gray flex justify-center h-12 items-center rounded">
                M 6/ W 7.5
              </div>
              <div className="border border-gray flex justify-center h-12 items-center rounded">
                M 6/ W 7.5
              </div>
              <div className="border border-gray flex justify-center h-12 items-center rounded">
                M 6/ W 7.5
              </div>
              <div className="border border-gray flex justify-center h-12 items-center rounded">
                M 6/ W 7.5
              </div>
              <div className="border border-gray flex justify-center h-12 items-center rounded">
                M 6/ W 7.5
              </div>
              <div className="border border-gray flex justify-center h-12 items-center rounded">
                M 6/ W 7.5
              </div>
              <div className="border border-gray flex justify-center h-12 items-center rounded">
                M 6/ W 7.5
              </div>
              <div className="border border-gray flex justify-center h-12 items-center rounded">
                M 6/ W 7.5
              </div>
            </div>
            <button
              className="w-full bg-black text-white px-6 py-5 rounded-full mt-12"
              disabled={token ? false : true}
              onClick={handleBooking}
            >
              Add to Bag
            </button>
            <button className="w-full mb-6 bg-white text-black px-6 py-5 rounded-full mt-3 border border-black">
              Favorite
            </button>
            <div className="w-full text-center text-slate-500">
              This product is excluded from site promotions and discounts.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Product;
