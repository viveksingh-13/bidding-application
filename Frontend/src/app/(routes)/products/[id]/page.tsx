"use client";
import { useEffect, useState } from "react";
import withPrivateLayout from "@/utils/withPrivateLayout";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { useProductContext } from "@/context/context";

const ProductDetailPage = () => {
  const { products, updateProducts }: any = useProductContext();
  const [bidderName, setBidderName] = useState("");
  const [bidAmount, setBidAmount] = useState("");
  const router = useRouter();
  const params = useParams();
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    const getProduct = products?.filter((item: any) => {
      return item?.id == params?.id;
    });
    setProduct(getProduct[0]);
  }, [params.id, products]);

  const handleBidSubmission = () => {
    if (!bidderName || !bidAmount) {
      alert("Please enter both name and bid amount.");
      return;
    }

    const updatedProducts = products.map((p: any) => {
      if (p.id === product.id) {
        // Update pending_bids array with new bid
        const newBid = {
          name: bidderName,
          bid: bidAmount,
        };
        const updatedTotalBids = [...p.pending_bids, newBid];

        // Calculate highest bid
        const highestBid = Math.max(
          ...updatedTotalBids.map((bid) => parseInt(bid.bid))
        );

        // Update product with new bid and highest bid
        return {
          ...p,
          pending_bids: updatedTotalBids,
          highest_bid: highestBid,
        };
      }
      return p;
    });

    // Update products state with updated product
    updateProducts(updatedProducts);

    // Reset bidder name and bid amount fields
    setBidderName("");
    setBidAmount("");
  };
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg">
      <h3 className="text-center text-gray-600 text-2xl font-semibold">
        {product?.title}
      </h3>
      <div className="flex justify-center">
        <div className="relative h-40 w-40 rounded-lg overflow-hidden">
          <Image
            src={product?.images[0]}
            alt={product?.name}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
        <h1 className="text-3xl font-semibold mb-4">${product?.price}</h1>
      <div className="mt-8 grid grid-cols-2">
        <ul>
          <h4 className="text-lg text-gray-500 font-semibold mb-4">
            List of previous owners.
          </h4>
          {product?.total_bids?.length>0?product?.total_bids?.map((item: any) => {
            return (
              <li key={item.name} className=" capitalize ">
                {item?.name ? item?.name + " -" : "--"}
                {item?.bid ? " $" + item?.bid : ""}
              </li>
            );
          }):'--'}
        </ul>
        <ul>
          <h4 className="text-lg text-gray-500 font-semibold mb-4">
            List of pending bids.
          </h4>
          {product?.pending_bids?.length>0 ? product?.pending_bids?.map((item: any) => {
            return (
              <li key={item.name} className=" capitalize ">
                {item?.name ? item?.name + " -" : "--"}
                {item?.bid ? " $" + item?.bid : ""}
              </li>
            );
          }):'--'}
        </ul>
        <div className="flex py-4">
          <input
            type="text"
            placeholder="Enter your name"
            value={bidderName}
            onChange={(e) => setBidderName(e.target.value)}
            className="mr-2 border border-gray-300 rounded-md p-2"
          />
          <input
            type="number"
            placeholder="Enter bid amount"
            value={bidAmount}
            onChange={(e) => setBidAmount(e.target.value)}
            className="mr-2 border border-gray-300 rounded-md p-2"
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleBidSubmission}
          >
            Place Bid
          </button>
        </div>
      </div>
    </div>
  );
};

export default withPrivateLayout(ProductDetailPage);
