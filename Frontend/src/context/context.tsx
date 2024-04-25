"use client";
import React, { ReactNode, createContext, useContext, useState } from "react";

// Create context
const ProductContext: any = createContext("");

// Provider component
export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<any>([
    {
      id: 1,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
      images: [
        "https://cdn.dummyjson.com/product-images/1/1.jpg",
        "https://cdn.dummyjson.com/product-images/1/2.jpg",
        "https://cdn.dummyjson.com/product-images/1/3.jpg",
        "https://cdn.dummyjson.com/product-images/1/4.jpg",
        "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
      ],
      highest_bid: null,
      pending_bids: [],
      total_bids: [],
    },
    {
      id: 2,
      title: "iPhone X",
      description:
        "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      price: 899,
      discountPercentage: 17.94,
      rating: 4.44,
      stock: 34,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg",
      images: [
        "https://cdn.dummyjson.com/product-images/2/1.jpg",
        "https://cdn.dummyjson.com/product-images/2/2.jpg",
        "https://cdn.dummyjson.com/product-images/2/3.jpg",
        "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg",
      ],
      highest_bid: null,
      pending_bids: [],
      total_bids: [
        {
          name: "rohit",
          bid: "20",
        },
      ],
    },
    {
      id: 3,
      title: "Samsung Universe 9",
      description:
        "Samsung's new variant which goes beyond Galaxy to the Universe",
      price: 1249,
      discountPercentage: 15.46,
      rating: 4.09,
      stock: 36,
      brand: "Samsung",
      category: "smartphones",
      thumbnail: "https://cdn.dummyjson.com/product-images/3/thumbnail.jpg",
      images: ["https://cdn.dummyjson.com/product-images/3/1.jpg"],
      highest_bid: null,
      pending_bids: [],
      total_bids: [],
    },
    {
      id: 4,
      title: "OPPOF19",
      description: "OPPO F19 is officially announced on April 2021.",
      price: 280,
      discountPercentage: 17.91,
      rating: 4.3,
      stock: 123,
      brand: "OPPO",
      category: "smartphones",
      thumbnail: "https://cdn.dummyjson.com/product-images/4/thumbnail.jpg",
      images: [
        "https://cdn.dummyjson.com/product-images/4/1.jpg",
        "https://cdn.dummyjson.com/product-images/4/2.jpg",
        "https://cdn.dummyjson.com/product-images/4/3.jpg",
        "https://cdn.dummyjson.com/product-images/4/4.jpg",
        "https://cdn.dummyjson.com/product-images/4/thumbnail.jpg",
      ],
      highest_bid: null,
      pending_bids: [],
      total_bids: [
        {
          name: "vishal",
          bid: "500",
        },
        {
          name: "rohit",
          bid: "500",
        },
        {
          name: "akash",
          bid: "500",
        },
      ],
    },
    {
      id: 5,
      title: "Huawei P30",
      description:
        "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
      price: 499,
      discountPercentage: 10.58,
      rating: 4.09,
      stock: 32,
      brand: "Huawei",
      category: "smartphones",
      thumbnail: "https://cdn.dummyjson.com/product-images/5/thumbnail.jpg",
      images: [
        "https://cdn.dummyjson.com/product-images/5/1.jpg",
        "https://cdn.dummyjson.com/product-images/5/2.jpg",
        "https://cdn.dummyjson.com/product-images/5/3.jpg",
      ],
      highest_bid: null,
      pending_bids: [],
      total_bids: [],
    },
    {
      id: 6,
      title: "MacBook Pro",
      description:
        "MacBook Pro 2021 with mini-LED display may launch between September, November",
      price: 1749,
      discountPercentage: 11.02,
      rating: 4.57,
      stock: 83,
      brand: "Apple",
      category: "laptops",
      thumbnail: "https://cdn.dummyjson.com/product-images/6/thumbnail.png",
      images: [
        "https://cdn.dummyjson.com/product-images/6/1.png",
        "https://cdn.dummyjson.com/product-images/6/2.jpg",
        "https://cdn.dummyjson.com/product-images/6/3.png",
        "https://cdn.dummyjson.com/product-images/6/4.jpg",
      ],
      highest_bid: null,
      pending_bids: [],
      total_bids: [],
    },
    {
      id: 7,
      title: "Samsung Galaxy Book",
      description:
        "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
      price: 1499,
      discountPercentage: 4.15,
      rating: 4.25,
      stock: 50,
      brand: "Samsung",
      category: "laptops",
      thumbnail: "https://cdn.dummyjson.com/product-images/7/thumbnail.jpg",
      images: [
        "https://cdn.dummyjson.com/product-images/7/1.jpg",
        "https://cdn.dummyjson.com/product-images/7/2.jpg",
        "https://cdn.dummyjson.com/product-images/7/3.jpg",
        "https://cdn.dummyjson.com/product-images/7/thumbnail.jpg",
      ],
      highest_bid: null,
      pending_bids: [],
      total_bids: [],
    },
    {
      id: 8,
      title: "Microsoft Surface Laptop 4",
      description:
        "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
      price: 1499,
      discountPercentage: 0,
      rating: 4.39,
      stock: 67,
      brand: "Microsoft",
      category: "laptops",
      thumbnail: "https://cdn.dummyjson.com/product-images/8/thumbnail.jpg",
      images: [
        "https://cdn.dummyjson.com/product-images/8/1.jpg",
        "https://cdn.dummyjson.com/product-images/8/2.jpg",
        "https://cdn.dummyjson.com/product-images/8/3.jpg",
        "https://cdn.dummyjson.com/product-images/8/thumbnail.jpg",
      ],
      highest_bid: null,
      pending_bids: [],
      total_bids: [],
    },
    {
      id: 9,
      title: "Dell XPS 13",
      description:
        "The Dell XPS 13 Developer Edition offers great power, a beautiful display, and Linux support.",
      price: 1299,
      discountPercentage: 11.55,
      rating: 4.69,
      stock: 45,
      brand: "Dell",
      category: "laptops",
      thumbnail: "https://cdn.dummyjson.com/product-images/9/thumbnail.jpg",
      images: [
        "https://cdn.dummyjson.com/product-images/9/1.jpg",
        "https://cdn.dummyjson.com/product-images/9/2.jpg",
        "https://cdn.dummyjson.com/product-images/9/3.jpg",
        "https://cdn.dummyjson.com/product-images/9/4.jpg",
        "https://cdn.dummyjson.com/product-images/9/thumbnail.jpg",
      ],
      highest_bid: null,
      pending_bids: [],
      total_bids: [],
    },
    {
      id: 10,
      title: "HP Pavilion 15",
      description:
        "Power to do it all: Take on everything with a high performance processor and advanced graphics.",
      price: 849,
      discountPercentage: 15.31,
      rating: 4.2,
      stock: 87,
      brand: "HP",
      category: "laptops",
      thumbnail: "https://cdn.dummyjson.com/product-images/10/thumbnail.jpg",
      images: [
        "https://cdn.dummyjson.com/product-images/10/1.jpg",
        "https://cdn.dummyjson.com/product-images/10/2.jpg",
        "https://cdn.dummyjson.com/product-images/10/3.jpg",
        "https://cdn.dummyjson.com/product-images/10/thumbnail.jpg",
      ],
      highest_bid: null,
      pending_bids: [],
      total_bids: [],
    },
  ]); // State for products
  const [bids, setBids] = useState<any>([]); // State for bids

  // Function to update product state
  const updateProducts = (updatedProducts: any) => {
    setProducts(updatedProducts);
  };

  // Function to update bid state
  const updateBids = (updatedBids: any) => {
    setBids(updatedBids);
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        bids,
        updateProducts,
        updateBids,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

// Custom hook to access context
export const useProductContext = () => useContext(ProductContext);
