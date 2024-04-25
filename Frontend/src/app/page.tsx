"use client";
import { useEffect, useState } from "react";
import withPrivateLayout from "@/utils/withPrivateLayout";
import Image from "next/image";
import Link from "next/link";
import { useProductContext } from "@/context/context";

const Home = () => {
  const { products }: any = useProductContext();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between lg:p-28">
      <h1 className="text-3xl font-semibold mb-8">Available Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-8">
        {products?.map((product: any) => (
          <div
            key={product.id}
            className="bg-gray-200 rounded-lg shadow-lg p-6 cursor-pointer"
          >
            <Link
              href={{
                pathname: `/products/${product.id}`,
              }}
              className="text-end capitalize underline my-1 block"
            >
              view
            </Link>
            <div className="relative h-40">
              <Image
                src={product?.images[0]} // Replace with actual image URL
                alt={product?.title}
                layout="fill"
                className="rounded-t-lg object-contain"
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
              <p className="text-gray-500">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default withPrivateLayout(Home);
