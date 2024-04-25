"use client";
import { useProductContext } from "@/context/context";
import withPrivateLayout from "@/utils/withPrivateLayout";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const AdminPage: React.FC = () => {
  const { products, updateProducts }: any = useProductContext();

  const handleBidSubmission = (
    bidderName: string,
    bidAmount: string,
    id: string
  ) => {
    if (!bidderName || !bidAmount) {
      alert("Please enter both name and bid amount.");
      return;
    }

    const updatedProducts = products.map((p: any) => {
      if (p.id === id) {
        // Update total_bids array with new bid
        const newBid = {
          name: bidderName,
          bid: bidAmount,
        };
        const updatedTotalBids = [...p.total_bids, newBid];

        // Calculate highest bid
        const highestBid = Math.max(
          ...updatedTotalBids.map((bid) => parseInt(bid.bid))
        );

        // Update product with new bid and highest bid
        const updatedProduct = {
          ...p,
          total_bids: updatedTotalBids,
          highest_bid: highestBid,
        };

        // Remove the accepted bid from pending_bids
        const updatedPendingBids = p.pending_bids.filter(
          (pendingBid: any) =>
            pendingBid.name !== bidderName || pendingBid.bid !== bidAmount
        );

        // Merge the updated product with the filtered pending_bids
        return {
          ...updatedProduct,
          pending_bids: updatedPendingBids,
        };
      }
      return p;
    });

    // Update products state with updated product
    updateProducts(updatedProducts);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between lg:p-28">
      <h1 className="text-3xl font-semibold mb-8">Available Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2   gap-8">
        {products?.map((product: any) => (
          <div
            key={product.id}
            className="bg-gray-200 rounded-lg shadow-lg p-6 cursor-pointer"
          >
            <div className="relative h-40">
              <Image
                src={product?.images[0]} // Replace with actual image URL
                alt={product?.title}
                layout="fill"
                className="rounded-t-lg object-contain"
              />
            </div>
            <div className="p-4">
              <div className="grid grid-cols-2 gap-8">
                <ul>
                  <h4 className="text-lg text-gray-500 font-semibold mb-4">
                    List of previous owners.
                  </h4>
                  {product?.total_bids?.length > 0
                    ? product?.total_bids?.map((item: any) => {
                        return (
                          <li key={item.name} className=" capitalize ">
                            {item?.name ? item?.name + " -" : "--"}
                            {item?.bid ? " $" + item?.bid : ""}
                          </li>
                        );
                      })
                    : "--"}
                </ul>
                <div>
                  <h4 className="text-lg text-gray-500 font-semibold mb-4">
                    List of pending bids.
                  </h4>
                  {product?.pending_bids?.length > 0
                    ? product?.pending_bids?.map((item: any) => {
                        return (
                          <div
                            key={item.name}
                            className=" capitalize flex gap-3 justify-start items-center "
                          >
                            {item?.name ? item?.name + " -" : "--"}
                            {item?.bid ? " $" + item?.bid : ""}
                            {item?.name && item?.bid && (
                              <button
                                className="bg-blue-400 p-2 text-white rounded-lg"
                                onClick={() =>
                                  handleBidSubmission(
                                    item?.name,
                                    item?.bid,
                                    product?.id
                                  )
                                }
                              >
                                Accept
                              </button>
                            )}
                          </div>
                        );
                      })
                    : "--"}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default withPrivateLayout(AdminPage);
