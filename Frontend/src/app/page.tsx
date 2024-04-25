"use client";
import { useEffect, useState } from "react";
import withPrivateLayout from "@/utils/withPrivateLayout";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Product 1",
      description: "Description of Product 1",
      quantity: 10,
      currentHighestBid: 0,
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description of Product 2",
      quantity: 5,
      currentHighestBid: 0,
    },
    {
      id: 3,
      name: "Product 3",
      description: "Description of Product 3",
      quantity: 8,
      currentHighestBid: 0,
    },
    {
      id: 4,
      name: "Product 4",
      description: "Description of Product 4",
      quantity: 12,
      currentHighestBid: 0,
    },
    {
      id: 5,
      name: "Product 5",
      description: "Description of Product 5",
      quantity: 15,
      currentHighestBid: 0,
    },
    {
      id: 6,
      name: "Product 6",
      description: "Description of Product 6",
      quantity: 20,
      currentHighestBid: 0,
    },
    {
      id: 7,
      name: "Product 7",
      description: "Description of Product 7",
      quantity: 3,
      currentHighestBid: 0,
    },
    {
      id: 8,
      name: "Product 8",
      description: "Description of Product 8",
      quantity: 6,
      currentHighestBid: 0,
    },
    {
      id: 9,
      name: "Product 9",
      description: "Description of Product 9",
      quantity: 9,
      currentHighestBid: 0,
    },
    {
      id: 10,
      name: "Product 10",
      description: "Description of Product 10",
      quantity: 14,
      currentHighestBid: 0,
    },
    {
      id: 11,
      name: "Product 11",
      description: "Description of Product 11",
      quantity: 7,
      currentHighestBid: 0,
    },
    {
      id: 12,
      name: "Product 12",
      description: "Description of Product 12",
      quantity: 11,
      currentHighestBid: 0,
    },
    {
      id: 13,
      name: "Product 13",
      description: "Description of Product 13",
      quantity: 18,
      currentHighestBid: 0,
    },
    {
      id: 14,
      name: "Product 14",
      description: "Description of Product 14",
      quantity: 4,
      currentHighestBid: 0,
    },
    {
      id: 15,
      name: "Product 15",
      description: "Description of Product 15",
      quantity: 17,
      currentHighestBid: 0,
    },
    {
      id: 16,
      name: "Product 16",
      description: "Description of Product 16",
      quantity: 22,
      currentHighestBid: 0,
    },
    {
      id: 17,
      name: "Product 17",
      description: "Description of Product 17",
      quantity: 13,
      currentHighestBid: 0,
    },
    {
      id: 18,
      name: "Product 18",
      description: "Description of Product 18",
      quantity: 9,
      currentHighestBid: 0,
    },
    {
      id: 19,
      name: "Product 19",
      description: "Description of Product 19",
      quantity: 6,
      currentHighestBid: 0,
    },
    {
      id: 20,
      name: "Product 20",
      description: "Description of Product 20",
      quantity: 23,
      currentHighestBid: 0,
    },
    {
      id: 21,
      name: "Product 21",
      description: "Description of Product 21",
      quantity: 10,
      currentHighestBid: 0,
    },
    {
      id: 22,
      name: "Product 22",
      description: "Description of Product 22",
      quantity: 16,
      currentHighestBid: 0,
    },
    {
      id: 23,
      name: "Product 23",
      description: "Description of Product 23",
      quantity: 5,
      currentHighestBid: 0,
    },
    {
      id: 24,
      name: "Product 24",
      description: "Description of Product 24",
      quantity: 8,
      currentHighestBid: 0,
    },
    {
      id: 25,
      name: "Product 25",
      description: "Description of Product 25",
      quantity: 19,
      currentHighestBid: 0,
    },
    {
      id: 26,
      name: "Product 26",
      description: "Description of Product 26",
      quantity: 21,
      currentHighestBid: 0,
    },
    {
      id: 27,
      name: "Product 27",
      description: "Description of Product 27",
      quantity: 12,
      currentHighestBid: 0,
    },
    {
      id: 28,
      name: "Product 28",
      description: "Description of Product 28",
      quantity: 7,
      currentHighestBid: 0,
    },
  ]);

  // Function to place bid on a product
  const placeBid = (productId: any, bidAmount: any) => {
    setProducts((prevProducts: any) => {
      return prevProducts.map((product: any) => {
        if (product.id === productId && bidAmount > product.currentHighestBid) {
          // Update the current highest bid
          product.currentHighestBid = bidAmount;
          // Update the remaining quantity
          product.quantity -= 1;
          // Check if product is sold out
          if (product.quantity === 0) {
            console.log(`Product ${product.name} has been sold out.`);
          }
        }
        return product;
      });
    });
  };
  console.log("product===>0", products);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between lg:p-28">
      <h1 className="text-3xl font-semibold mb-8">Available Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2  gap-8">
        {products.map((product: any) => (
          <div
            key={product.id}
            className="bg-gray-200 rounded-lg shadow-lg p-6 cursor-pointer"
          >
            <Link
              href={{
                pathname: `/products/${product.id}`,
                query: { ...product },
              }}
              className="text-end capitalize underline my-1 block"
            >
              view
            </Link>
            <div className="relative h-40">
              <Image
                src={product.img} // Replace with actual image URL
                alt={product.title}
                layout="fill"
                className="rounded-t-lg object-contain"
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
              <p className="text-gray-500">{product.description}</p>
              <p className="text-gray-600">
                Current Highest Bid: ${product.currentHighestBid}
              </p>
              <p className="text-gray-600 mb-4">
                Remaining Quantity:{" "}
                {product.quantity < 0 ? product.quantity : 0}
              </p>
              <div className="flex">
                <input
                  type="number"
                  placeholder="Enter bid amount"
                  id="bidInput"
                  className="mr-2 border border-gray-300 rounded-md p-2"
                  onChange={(e) => {
                    e.preventDefault();
                    // Parse the input value as a number and set to 0 if invalid
                    const bidAmount = parseInt(e.target.value) || 0;
                    // Call placeBid function with product ID and bid amount
                    placeBid(product.id, parseInt(e.target.value) || 0);
                  }}
                />
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => {
                    const inputField: any = document.querySelector("#bidInput");
                    const bidAmount = parseInt(inputField.value) || 0;
                    // Reset input field value
                    inputField.value = "";
                    placeBid(product.id, bidAmount);
                  }}
                >
                  Place Bid
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default withPrivateLayout(Home);
